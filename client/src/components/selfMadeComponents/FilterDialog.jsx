'use client'

import * as React from 'react'

import Button from '@mui/material/Button'

import Dialog from '@mui/material/Dialog'

import { DialogActions, DialogContent } from '@mui/material'
import LanguageSelect from './LanguageSelect'
import LevelSelect from './LevelSelect'
import useProblemList from '@/hooks/useProblemList'

export default function FilterDialog({fetchFilteredProblems}) {
    const [open, setOpen] = React.useState(false)
    const [language, setLanguage] = React.useState('all')
    const [level, setLevel] = React.useState('all')

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleFilter = async () => {
        setOpen(false)
        await fetchFilteredProblems(language, level)
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                問題を絞り込む
            </Button>
            <SimpleDialog
                open={open}
                handleClose={handleClose}
                language={language}
                setLanguage={setLanguage}
                level={level}
                setLevel={setLevel}
                handleFilter={handleFilter}
            />
        </div>
    )
}

function SimpleDialog({
    open,
    handleClose,
    language,
    setLanguage,
    level,
    setLevel,
    handleFilter,
}) {
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <LanguageSelect language={language} setLanguage={setLanguage} />
                <LevelSelect level={level} setLevel={setLevel} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>キャンセル</Button>
                <Button onClick={handleFilter} autoFocus>
                    絞り込む
                </Button>
            </DialogActions>
        </Dialog>
    )
}
