//生成された問題とヒント　答えの３つのバッククオートで囲まれた部分の背景色を変更する関数

const {
    default: CodeBlock,
} = require('@/components/selfMadeComponents/CodeBlock')

export const convertCodeBlock = text => {
    return text.replace(/```([\s\S]*?)```/, function (code) {
        return <CodeBlock text={code} />
    })
}
