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
                <Nav filterDialog={false} />
            </nav>

            {/* スマホのときに表示される */}
            <div className={styles.hamburgerMenu}>
                <HamburgerMenu />
            </div>

            <main className={styles.mainArea}>
                <p style={{ fontSize: 20 }}>
                    <span style={{ fontStyle: 'italic' }}>P3</span>
                    とはProgramming Practice Platformの略です。
                    <br />
                    プログラミング言語の問題を解き、スキルを向上させることを目的としています。
                    <br />
                    ただ問題を解くだけではなく、問題の共有もできるようになっています。
                </p>
            </main>
        </div>
    )
}

export default page
