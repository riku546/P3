'use client'

import Nav from '@/components/selfMadeComponents/Nav'
import ProblemList from '@/components/selfMadeComponents/ProblemList'
import useProblemList from '@/hooks/useProblemList'
import React, { use, useEffect, useState } from 'react'
import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'
import styles from './page.module.css'
import axios from '@/lib/axios'

const page = () => {
    const [Problems, setProblems] = useState([])

    //laravelのapiを叩いて、すべての問題を取得
    const fetchAllProblems = async () => {
        try {
            const Problems = await axios.get('/api/allProblems')
            setProblems(Problems.data)
        } catch (error) {
            throw error
        }
    }

    //絞り込まれた問題を取得
    const fetchFilteredProblems = async (lang, level) => {
        try {
            const Problems = await axios.get(
                `/api/filterProblems/${lang}/${level}`,
            )
            console.log(Problems)
            setProblems(Problems.data)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        fetchAllProblems()

        return () => {
            setProblems([])
        }
    }, [])

    return (
        <div className={styles.container}>
            {/* パソコンとタブレットのときに表示される */}
            <nav className={styles.nav}>
                <Nav
                    filterDialog={true}
                    fetchFilteredProblems={fetchFilteredProblems}
                />
            </nav>

            {/* スマホのときに表示される */}
            <div className={styles.hamburgerMenu}>
                <HamburgerMenu />
            </div>

            <main className={styles.mainArea}>
                <ProblemList problemInfos={Problems} />
            </main>
        </div>
    )
}

export default page
