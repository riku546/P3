import axios from '@/lib/axios'
import { checkUserLogined } from '@/lib/checkUserLogined'
import React, { useState } from 'react'

const useReview = () => {
    const [numStar, setNumStar] = useState(5)
    const [open, setOpen] = useState(false)

    //ダイアログを閉じる
    const handleClose = () => {
        setOpen(false)
    }

    //ダイアログを開く
    const handleClickOpen = () => {
        setOpen(true)
    }

    const sendReview = async problemId => {
        handleClose()

        //ユーザーがログインしているかを確認
        const { isAuth } = await checkUserLogined()

        //ログインしていない場合の処理
        if (!isAuth) {
            alert('ログインしてください')
            return
        }

        try {
            await axios.post('api/review', {
                problemId: problemId,
                numStar: numStar,
            })
            alert('success')
        } catch (error) {
            console.log(error)
        }
    }

    return {
        numStar,
        setNumStar,
        open,
        handleClickOpen,
        handleClose,
        sendReview,
    }
}

export default useReview
