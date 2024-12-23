'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const useRedirect = () => {
    const router = useRouter()
    //問題の詳細ページへのリダイレクトする関数
    const redirectProblemPage = problemId => {
        router.push(`/problem?problemId=${problemId}`)
    }

    return { redirectProblemPage }
}

export default useRedirect
