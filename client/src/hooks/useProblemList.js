'use client'

import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const useProblemList = () => {
    const [Problems, setProblems] = useState([])

    //laravelのapiを叩いて、すべての問題を取得
    const fetchAllProblems = async () => {
        try {
            const Problems = await axios.get('/api/allProblems')
            setProblems(Problems.data)
        } catch (error) {
            throw error
        }
    }

    //絞り込まれた問題を取得
    const fetchFilteredProblems = async (lang, level) => {
        try {
            const Problems = await axios.get(
                `/api/filterProblems/${lang}/${level}`,
            )
            console.log(Problems)
            setProblems(Problems.data)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        fetchAllProblems()

        return () => {
            setProblems([])
        }
    }, [])

    return { Problems, fetchFilteredProblems }
}

export default useProblemList
