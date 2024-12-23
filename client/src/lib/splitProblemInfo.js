//生成された問題とヒントと答えの"\nで分割し、配列に格納

//引数 {problem:"問題\njavascript" , hint:"ヒント\njavascriptは動的型付け言語" , answer:"答え\njavascriptに型をつけることはできない"}

//返り値 {problem:["問題" , "javascript"] , hint:["ヒント" , "javascriptは動的型付け言語"] , answer:["答え" , "javascriptには型をつけることはできない"]}
export const splitProblemInfo = problemInfos => {
    const arrayProblemInfos = Object.values(problemInfos)
    const arrayProblemKey = Object.keys(problemInfos)
    return Object.fromEntries(
        arrayProblemInfos.map((problemInfo, i) => [
            `${arrayProblemKey[i]}`,
            problemInfo.split('\n'),
        ]),
    )
}
