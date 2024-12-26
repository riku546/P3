import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import useHome from '@/hooks/useHome'

export default function LanguageSelect({ language, setLanguage }) {
    const { languages } = useHome()

    const handleChange = event => {
        setLanguage(event.target.value)
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-select-small-label">
                プログラミング言語
            </InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={language}
                label="プログラミング言語"
                
                onChange={handleChange}>
                <MenuItem value={"all"}>all</MenuItem>
                {languages.map(language => (
                    <MenuItem key={language} value={language}>
                        {language}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
