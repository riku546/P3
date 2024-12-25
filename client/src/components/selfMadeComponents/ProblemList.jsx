import useRedirect from '@/hooks/useRedirect'
import { Rating } from '@mui/material'
import React from 'react'
import styles from './css/ProblemList.module.css'

const ProblemList = ({ problemInfos }) => {
    const { redirectProblemPage } = useRedirect()

    return (
        <div className={styles.container}>
            {problemInfos.map(problemInfo => (
                <div
                    key={problemInfo.id}
                    //問題の詳細ページにリダイレクトする
                    onClick={() => redirectProblemPage(problemInfo.id)}
                    className={styles.problem}
                    >
                    <div className={styles.problemInfo}>
                        
                        <p>{problemInfo.programmingLang}</p>
                        <p>レベル：{problemInfo.level}</p>
                    </div>
                    <div className={styles.ratingArea}>
                        <Rating
                            name="read-only"
                            value={problemInfo.stars}
                            readOnly
                        />
                        <span>{problemInfo.review_count}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProblemList
