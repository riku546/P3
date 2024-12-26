import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import useHome from '@/hooks/useHome'

export default function LevelSelect({ level, setLevel }) {
    const { problemLevels } = useHome()

    const handleChange = event => {
        setLevel(event.target.value)
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">レベル</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={level}
                label="レベル"
                onChange={handleChange}>
                <MenuItem value="all">all</MenuItem>
                {problemLevels.map(level => (
                    <MenuItem key={level} value={level}>
                        {level}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
