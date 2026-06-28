'use client'

import { useState } from 'react';
import styles from './feedback_form.module.css';
import { InsertFeedback } from '@/app/server_functions/insert_feedback/insert_feedback';
import { courseType, yearType } from '@/app/(utils)/models/course';

interface StatusValues {
   type: 'idle' | 'loading' | 'success' | 'error'
   message: string,
}
export function FeedbackForm() {
    const [status, setStatus] = useState<StatusValues>({ type: 'idle', message: '' })

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus({ type: 'loading', message: 'Invio in corso...' })
        const formData = new FormData(event.currentTarget)
        const proArray = formData.get('pro')?.toString().split('\n').map(s => s.trim()).filter(Boolean) || []
        const notArray = formData.get('not')?.toString().split('\n').map(s => s.trim()).filter(Boolean) || []
        const payload = {
            name: formData.get('name') as string,
            lang: formData.get('lang') as string,
            polls: formData.get('polls') === 'true',
            type: formData.get('type') as courseType,
            year: formData.get('year') as yearType,
            pro: proArray,
            not: notArray,
        };

        try {
            const result = await InsertFeedback(payload);
            
            if (result.success) {
                setStatus({ type: 'success', message: result.message });
                (event.target as HTMLFormElement).reset(); 
            } else {
                setStatus({ type: 'error', message: result.message });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Si è verificato un errore imprevisto.' });
        }
    }

    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Aggiungi una Recensione</h2>
            
            <form onSubmit={handleSubmit} className={styles.form}>
                
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Nome del Corso</label>
                    <input type="text" id="name" name="name" required placeholder="Es. Misure Elettroniche" />
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="lang">Lingua</label>
                        <select id="lang" name="lang" required>
                            <option value="it">Italiano (IT)</option>
                            <option value="en">Inglese (EN)</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="polls">Sondaggi/Esercizi in classe?</label>
                        <select id="polls" name="polls" required>
                            <option value="false">No</option>
                            <option value="true">Sì</option>
                        </select>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="type">Tipo di Laurea</label>
                        <select id="type" name="type" required>
                            <option value="bachelor">Triennale (Bachelor)</option>
                            <option value="master">Magistrale (Master)</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="year">Anno</label>
                        <select id="year" name="year" required>
                            <option value="primoAnno">1° Anno</option>
                            <option value="secondoAnno">2° Anno</option>
                            <option value="terzoAnno">3° Anno</option>
                        </select>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="pro">Pro del corso (Vai a capo per ogni punto)</label>
                    <textarea id="pro" name="pro" rows={4} required placeholder="Spiega bene gli argomenti...&#10;Materiale didattico eccellente..."></textarea>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="not">Contro del corso (Vai a capo per ogni punto)</label>
                    <textarea id="not" name="not" rows={4} required placeholder="Laboratori troppo lunghi...&#10;Esame scritto molto difficile..."></textarea>
                </div>

                <button 
                    type="submit" 
                    className={styles.submitBtn} 
                    disabled={status.type === 'loading'}
                >
                    <span className={styles.buttonContent}>
                          {status.type === 'loading' ? 'Salvataggio...' : 'Invia Recensione'}
                    </span>
                  
                </button>

                {status.message && (
                    <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                        {status.message}
                    </div>
                )}
            </form>
        </div>
    );
}