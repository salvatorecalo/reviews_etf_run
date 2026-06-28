"use client"
import { FRONTEND_GITHUB_REPO, RUN_POLITO_WEBSITE } from '@/app/(utils)/utils';
import './Footer.css'
import Link from 'next/link';

export function Footer() {

    return (
        <footer>
            <h3>Questo sito è <Link href={FRONTEND_GITHUB_REPO}>Open source</Link> e fa uso delle seguenti licenze: Font Awesome</h3>
            <h3>Powered by <Link href={RUN_POLITO_WEBSITE} target='_blank'>Run Polito</Link></h3>
        </footer>
    );
}