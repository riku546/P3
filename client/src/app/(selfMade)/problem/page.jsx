'use client'

import DisplayProblemInfo from '@/components/selfMadeComponents/DisplayProblemInfo'
import Nav from '@/components/selfMadeComponents/Nav'
import ReviewDialog from '@/components/selfMadeComponents/ReviewDialog'
import useProblem from '@/hooks/useProblem'
import '@/app/pageLayout.css'
import styles from './page.module.css'
import React from 'react'
import { Rating } from '@mui/material'
import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'

const page = () => {
    const { problemInfo, reviewData, problemId } = useProblem()
    return (
        <div className={styles.container}>
            {/* パソコンとタブレットのときに表示される */}
            <nav className="nav">
                <Nav />
            </nav>

            {/* スマホのときに表示される */}
            <div className="hamburger-menu">
                <HamburgerMenu />
            </div>

            <main className="main-area">
                <div className={styles.ratingArea}>
                    <div className={styles.expressRate}>
                        <Rating
                            name="read-only"
                            value={reviewData.stars}
                            readOnly
                        />
                        <p>{reviewData.reviewCount}</p>
                    </div>
                    <ReviewDialog problemId={problemId} />
                </div>
                {/* problemInfoがフェッチされたら表示されるようになっている */}
                {/* そうしないと、表示が汚くなってしまうから */}
                {problemInfo && (
                    <DisplayProblemInfo problemInfos={problemInfo} />
                )}
            </main>
        </div>
    )
}

export default page
