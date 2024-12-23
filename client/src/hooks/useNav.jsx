'use client'

import { checkUserLogined } from '@/lib/checkUserLogined'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const useNav = () => {
    const [userNameOrLogin, setuserNameOrLogin] = useState()

    useEffect(() => {
        const process = async () => {
            //ログインしているかを確認
            const { isAuth, data } = await checkUserLogined()
            //ログインしていた場合はユーザー名をセット
            //していない場合はログイン画面に遷移できるようにする
            setuserNameOrLogin(
                isAuth ? <Link href="/dashboard">{data.name}</Link> : <Link href="/register">sign up</Link>,
            )
        }

        process()
    }, [])

    return { userNameOrLogin }
}

export default useNav
