'use client'

import { checkUserLogined } from '@/lib/checkUserLogined'
import { splitProblemInfo } from '@/lib/splitProblemInfo'
import { requestProblem } from '@/lib/requestProblem'
import { useState } from 'react'

const useHome = () => {
    const problemLevels = ['初級', '中級', '上級']
    const [level, setLevel] = useState('初級')
    const [programmingLang, setProgrammingLang] = useState('php')
    const [problemInfos, setProblemInfos] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const verifyLoginAndFetch = async () => {
        //ユーザーがログインしているかを確認
        const { isAuth } = await checkUserLogined()

        //ログインしていない場合の処理
        if (!isAuth) {
            alert('ログインしてください')
            return
        }

        //問題の生成中はローディングする
        setIsLoading(true)

        //問題の生成をする
        const problem = await requestProblem(level, programmingLang)

        //問題が生成し終えたから、ローディング終了
        setIsLoading(false)

        //splitProblemInfo()で生成した問題を表示しやすいようにしている
        setProblemInfos(splitProblemInfo(problem.data))
    }

    return {
        problemLevels,
        setLevel,
        setProgrammingLang,
        verifyLoginAndFetch,
        problemInfos,
        isLoading,
    }
}

export default useHome
