'use client'

import Nav from '@/components/selfMadeComponents/Nav'
import ProblemList from '@/components/selfMadeComponents/ProblemList'
import useProblemList from '@/hooks/useProblemList'
import '@/app/pageLayout.css'
import React from 'react'
import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'
import styles from './page.module.css'

const page = () => {
    const { allProblems, redirectProblemPage } = useProblemList()

    return (
        <div className="container">
            {/* パソコンとタブレットのときに表示される */}
            <nav className="nav">
                <Nav />
            </nav>

            {/* スマホのときに表示される */}
            <div className="hamburger-menu">
                <HamburgerMenu />
            </div>

            <main className={styles.main}>
                <ProblemList
                    problemInfos={allProblems}
                    redirectProblemPage={redirectProblemPage}
                />
            </main>
        </div>
    )
}

export default page
