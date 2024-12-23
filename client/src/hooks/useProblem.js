'use client'

import axios from '@/lib/axios'
import { splitProblemInfo } from '@/lib/splitProblemInfo'
import { Erica_One } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const useProblem = () => {
    const [problemInfo, setProblemInfo] = useState()
    const [reviewData, setReviewData] = useState({ stars: 0, reviewCount: 0 })
    const [problemId, setProblemId] = useState(null)
    const searchParm = useSearchParams()
    useEffect(() => {
        //URLに含まれるproblemパラメーターを取得
        const problemId = searchParm.get('problemId')
        setProblemId(problemId)

        //問題詳細ページに表示する問題の情報を取得
        const fetchProblemInfo = async problemId => {
            try {
                const problemInfo = await axios.get(`api/problem/${problemId}`)

                //取得した問題文とヒントと答えを表示しやすいようにしている
                const formattedProblemInfo = splitProblemInfo({
                    problem: problemInfo.data.problem,
                    hint: problemInfo.data.hint,
                    answer: problemInfo.data.answer,
                })

                //星の数（1 ～ 5）とレビューされた回数をセット
                setReviewData({
                    stars: problemInfo.data.stars,
                    reviewCount: problemInfo.data.review_count,
                })

                setProblemInfo(formattedProblemInfo)
            } catch (error) {
                throw error
            }
        }

        fetchProblemInfo(problemId)
    }, [])

    return { problemInfo, reviewData, problemId }
}

export default useProblem
