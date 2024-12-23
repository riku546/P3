import React from 'react'

//このコンポーネントは、問題の詳細ページで問題を表示する
const Problem = ({ problem }) => {
    return (
        <>
        <div>
            {problem.map(textLine => (
                <p>{textLine}</p>
            ))}
        </div>
        </>
    )
}

export default Problem
