'use client'

import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import { Button, Rating } from '@mui/material'
import useReview from '@/hooks/useReview'

const ReviewDialog = ({ problemId }) => {
    const {
        numStar,
        setNumStar,
        open,
        handleClickOpen,
        handleClose,
        sendReview,
    } = useReview()

    return (
        <>
            <Button
                disableElevation
                variant="contained"
                onClick={handleClickOpen}>
                レビューする
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>
                    <Rating
                        name="simple-controlled"
                        value={numStar}
                        onChange={(event, newValue) => {
                            setNumStar(newValue)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>戻る</Button>
                    <Button onClick={() => sendReview(problemId)} autoFocus>
                        送信
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ReviewDialog
