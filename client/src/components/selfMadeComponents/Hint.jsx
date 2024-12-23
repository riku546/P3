import React from 'react'
//このコンポーネントは、問題の詳細ページでヒントを表示する

const Hint = ({ hint }) => {
    return (
        <>
            <div>
                {hint.map(textLine => (
                    <p>{textLine}</p>
                ))}
            </div>
        </>
    )
}

export default Hint
