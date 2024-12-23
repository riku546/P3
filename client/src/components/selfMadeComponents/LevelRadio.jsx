import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material'

import React from 'react'

const LevelRadio = ({ problemLevels, setLevel }) => {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Level</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                row
                defaultValue="初級"
                name="radio-buttons-group">
                {problemLevels.map(level => (
                    <FormControlLabel
                        key={level}
                        value={level}
                        control={<Radio />}
                        label={level}
                        onClick={() => setLevel(level)}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export default LevelRadio
