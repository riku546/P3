'use client'

import DisplayProblemInfo from '@/components/selfMadeComponents/DisplayProblemInfo'
import Nav from '@/components/selfMadeComponents/Nav'
import './page.css'
import './pageLayout.css'
import useHome from '@/hooks/useHome'
import {
    Button,
    CircularProgress,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material'
import LoadingDialog from '@/components/selfMadeComponents/LoadingDialog'
import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'

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
        <div className="container">
            <nav className="nav">
                <Nav />
            </nav>

            {/* スマホのときに表示される */}
            <div className="hamburger-menu">
                <HamburgerMenu />
            </div>

            <main className="main-area">
                <h1 className="title">Welcome to PPP </h1>

                <div className="form-area">
                    {/* isLoadingがtrueの時は、ローディングのダイアログを表示する */}
                    <LoadingDialog isOpen={isLoading} />
                    <input
                        type="text"
                        placeholder="php"
                        className="input"
                        onChange={e => setProgrammingLang(e.target.value)}
                    />
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            Level
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            row
                            className="level-radio"
                            defaultValue="初級"
                            name="radio-buttons-group">
                            {problemLevels.map(level => (
                                <FormControlLabel
                                    key={level}
                                    value={level}
                                    control={<Radio />}
                                    label={level}
                                    onClick={() => setLevel(level)}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <Button
                        variant="contained"
                        disableElevation
                        onClick={verifyLoginAndFetch}>
                        問題を生成
                    </Button>
                </div>
                <div className="problem-area">
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
