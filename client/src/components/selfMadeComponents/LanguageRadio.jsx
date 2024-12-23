import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function LanguageRadio({ setProgrammingLang, languages }) {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
                プログラミング言語
            </FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={languages[0]}
                name="radio-buttons-group">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    }}>
                    {languages.map(language => (
                        <FormControlLabel
                            key={language}
                            value={language}
                            control={<Radio />}
                            label={language}
                            onClick={() => setProgrammingLang(language)}
                        />
                    ))}
                </div>
            </RadioGroup>
        </FormControl>
    )
}
