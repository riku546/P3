'use client'

import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'
import Nav from '@/components/selfMadeComponents/Nav'
import React from 'react'
import styles from './page.module.css'

const page = () => {
    return (
        <div className={styles.container}>
            {/* パソコンとタブレットのときに表示される */}
            <nav className={styles.nav}>
                <Nav />
            </nav>

            {/* スマホのときに表示される */}
            <div className={styles.hamburgerMenu}>
                <HamburgerMenu />
            </div>

            <main className={styles.mainArea}>
                <p style={{ fontSize: 20 }}>
                    <span style={{ fontStyle: 'italic' }}>PPP</span>
                    とはProgramming Practice Platformの略です。
                    <br />
                    プログラミング言語を実践的に習得するためのプラットフォームです。
                </p>
            </main>
        </div>
    )
}

export default page
