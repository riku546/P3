import React from 'react'
import Dialog from '@mui/material/Dialog'
import styles from './css/LoadingDialog.module.css'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { CircularProgress } from '@mui/material'

const LoadingDialog = ({ isOpen }) => {
    return (
        <>
            <Dialog
                open={isOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">loading...</DialogTitle>
                <DialogContent className={styles.dialogContent}>
                    {/* ローディング中に回る */}
                    <CircularProgress />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default LoadingDialog
