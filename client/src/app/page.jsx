'use client'

import DisplayProblemInfo from '@/components/selfMadeComponents/DisplayProblemInfo'
import Nav from '@/components/selfMadeComponents/Nav'
import styles from './page.module.css'
import useHome from '@/hooks/useHome'
import { Button } from '@mui/material'
import LoadingDialog from '@/components/selfMadeComponents/LoadingDialog'
import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'
import LevelRadio from '@/components/selfMadeComponents/LevelRadio'
import LanguageRadio from '@/components/selfMadeComponents/LanguageRadio'

const Home = () => {
    const {
        problemLevels,
        setLevel,
        setProgrammingLang,
        verifyLoginAndFetch,
        problemInfos,
        isLoading,
        languages,
    } = useHome()

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Nav filterDialog={false} />
            </nav>

            {/* スマホのときに表示される */}
            <div className={styles.hamburgerMenu}>
                <HamburgerMenu />
            </div>

            <main className={styles.mainArea}>
                <div>
                    <h1 className={styles.title}>Welcome to P3 </h1>

                    <div className={styles.formArea}>
                        {/* isLoadingがtrueの時は、ローディングのダイアログを表示する */}
                        <LoadingDialog isOpen={isLoading} />
                        <LanguageRadio
                            setProgrammingLang={setProgrammingLang}
                            languages={languages}
                        />
                        <div className={styles.form}>
                            {/* レベル選択 */}
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
                    </div>
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
