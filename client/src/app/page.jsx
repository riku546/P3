'use client'

import DisplayProblemInfo from '@/components/selfMadeComponents/DisplayProblemInfo'
import Nav from '@/components/selfMadeComponents/Nav'
import styles from './page.module.css'
import './pageLayout.css'
import useHome from '@/hooks/useHome'
import { Button } from '@mui/material'
import LoadingDialog from '@/components/selfMadeComponents/LoadingDialog'
import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'
import LevelRadio from '@/components/selfMadeComponents/LevelRadio'

const Home = () => {
    const {
        problemLevels,
        setLevel,
        setProgrammingLang,
        verifyLoginAndFetch,
        problemInfos,
        isLoading,
    } = useHome()

    return (
        <div className={styles.container}>
            <nav className="nav">
                <Nav />
            </nav>

            {/* スマホのときに表示される */}
            <div className="hamburger-menu">
                <HamburgerMenu />
            </div>

            <main className="main-area">
                <h1 className={styles.title}>Welcome to PPP </h1>

                <div className={styles.formArea}>
                    {/* isLoadingがtrueの時は、ローディングのダイアログを表示する */}
                    <LoadingDialog isOpen={isLoading} />
                    <input
                        type="text"
                        placeholder="php"
                        className="input"
                        onChange={e => setProgrammingLang(e.target.value)}
                    />
                    <LevelRadio
                        problemLevels={problemLevels}
                        setLevel={setLevel}
                    />

                    <Button
                        variant="contained"
                        disableElevation
                        onClick={verifyLoginAndFetch}>
                        問題を生成
                    </Button>
                </div>
                <div className={styles.problemArea}>
                    {/* 問題が生成されたときに表示される */}
                    {problemInfos && (
                        <DisplayProblemInfo problemInfos={problemInfos} />
                    )}
                </div>
            </main>
        </div>
    )
}

export default Home
