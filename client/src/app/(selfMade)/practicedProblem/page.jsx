'use client'

import Nav from '@/components/selfMadeComponents/Nav'
import ProblemList from '@/components/selfMadeComponents/ProblemList'
import usePracticed from '@/hooks/usePracticed'
import React from 'react'

import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'
import styles from './page.module.css'

const page = () => {
    const { practicedProblems } = usePracticed()

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
                {/* 生成した問題がない場合は"なし"と表示される */}
                {practicedProblems.length === 0 ? (
                    <div>なし</div>
                ) : (
                    <ProblemList problemInfos={practicedProblems} />
                )}
            </main>
        </div>
    )
}

export default page
