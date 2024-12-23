import React from 'react'
import Problem from './Problem'
import Hint from './Hint'
import Answer from './Answer'
import useDisplayProblemInfo from '@/hooks/useDisplayProblemInfo'
import styles from './css/DisplayProblemInfo.module.css'

//画面に生成された問題とヒントと答えを表示するコンポーネント
const DisplayProblemInfo = ({ problemInfos }) => {
    const { isOpenAnswer, setIsOpenAnswer, isOpenHint, setIsOpenHint } =
        useDisplayProblemInfo()

    return (
        <div className={styles.container}>
            <section>
                <p className={styles.label}>問題</p>
                <Problem problem={problemInfos.problem} />
            </section>
            <section>
                <p
                    className={styles.label}
                    onClick={() => setIsOpenHint(prev => !prev)}>
                    ヒント
                </p>
                {isOpenHint && <Hint hint={problemInfos.hint} />}
            </section>
            <section>
                <p
                    className={styles.label}
                    onClick={() => setIsOpenAnswer(prev => !prev)}>
                    答え
                </p>
                {isOpenAnswer && <Answer answer={problemInfos.answer} />}
            </section>
        </div>
    )
}

export default DisplayProblemInfo
