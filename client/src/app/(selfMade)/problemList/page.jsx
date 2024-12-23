'use client'

import Nav from '@/components/selfMadeComponents/Nav'
import ProblemList from '@/components/selfMadeComponents/ProblemList'
import useProblemList from '@/hooks/useProblemList'
import '@/app/pageLayout.css'
import React from 'react'
import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'

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

            <main className="main-area">
                <ProblemList
                    problemInfos={allProblems}
                    redirectProblemPage={redirectProblemPage}
                />
            </main>
        </div>
    )
}

export default page
