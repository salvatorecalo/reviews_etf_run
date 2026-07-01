import { searchProAndCons } from "@/app/server_functions/search_pro_and_cons/search_pro_and_cons"
import './course_detail.css'
import Image from "next/image"
import { SearchPanel } from "@/app/components/SearchPanel/SearchPanel"

interface PageProps {
    params: Promise<{ courseName: string }>
}
export default async function CoursePage({ params }: PageProps) {
    const { courseName } = await params
    const decodedName = decodeURIComponent(courseName)

    if (decodedName == "run polito"){
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
                <Image src="/run.jpeg" alt="Run polito" width="500" height="500" />
            </div>
        )
    }
    const data = await searchProAndCons(decodedName)
    if (!data) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", flexDirection: "column" }}>
                <SearchPanel with_text={false} />
                <h2 style={{ color: "var(--foreground)", opacity: 0.7 }}>Corso "{decodedName}" non trovato.</h2>
            </div>
        )
    }

    return (
        <main className="course-page-container">
            <header className="course-header">
                <h1 className="title">{decodedName}</h1>
                <span className="subtitle">Panoramica del corso</span>
            </header>

            <div className="reviews-grid">
                <section className="review-card pros-card">
                    <div className="card-header pros-header">
                        <h2>Vantaggi</h2>
                    </div>

                    <ul className="review-list">
                        {data.pro && data.pro.length > 0 ? (
                            data.pro.map((advantage, index) => (
                                <li key={index} className="review-item pro-item">
                                    <span className="bullet">✓</span>
                                    <p>{advantage}</p>
                                </li>
                            ))
                        ) : (
                            <p className="empty-state">Nessun vantaggio segnalato al momento.</p>
                        )}
                    </ul>
                </section>

                <section className="review-card cons-card">
                    <div className="card-header cons-header">
                        <h2>Difetti</h2>
                    </div>

                    <ul className="review-list">
                        {data.not && data.not.length > 0 ? (
                            data.not.map((defect, index) => (
                                <li key={index} className="review-item cons-item">
                                    <span className="bullet">✕</span>
                                    <p>{defect}</p>
                                </li>
                            ))
                        ) : (
                            <p className="empty-state">Nessun difetto segnalato al momento.</p>
                        )}
                    </ul>
                </section>

            </div>
        </main>
    )
}