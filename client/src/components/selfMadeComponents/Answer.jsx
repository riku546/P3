import React from 'react'
//このコンポーネントは、問題の詳細ページで答えを表示する

const Answer = ({ answer }) => {
    return (
        <>

            <div>
                {answer.map(textLine => (
                    <p>{textLine}</p>
                ))}
            </div>
        </>
    )
}

export default Answer
