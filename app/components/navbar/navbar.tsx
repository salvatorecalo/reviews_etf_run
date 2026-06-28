"use client"
import { useState } from 'react'
import './navbar.css'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <Link className="logo" href="/">
                <Image src="/run_logo.webp" alt="Regalo Appunti logo" fetchPriority="high" width="50" height="50" />
            </Link>
            <button
                className={`menu-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <ul className="nav-links">
                <li>
                    <Link href="/upload" onClick={() => setIsOpen(!isOpen)}>
                        Aggiungi recensione
                    </Link>
                </li>
                <li>
                    <Link href="https://t.me/KeyboardCommand" target='_blank' onClick={() => setIsOpen(!isOpen)}>
                        Segnala un problema
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
