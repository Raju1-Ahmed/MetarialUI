import React, { useState } from 'react'
import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText

} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export default function MuiCheckBox() {

    const [acceptTnc, setAcceptTnc] = useState(false);
    console.log("Value Is:", acceptTnc);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnc(event.target.checked)
    }

    const [skills, setSkills] = useState<string[]>([]);
    console.log("Value Is:", {skills});
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }

    return (
        <Box>
            <Box>
                <FormControlLabel 
                    label='i accept Tram And Condation'
                    control={<Checkbox checked={acceptTnc} onChange={handleChange} />}

                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptTnc}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl error >
                    <FormLabel> Skill </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                         label='HTML'
                         value='html'
                         control={<Checkbox  checked={skills.includes('html')} onChange={handleSkillChange} />}
                        />
                        <FormControlLabel
                            label='CSS'
                            value='css'
                            control={<Checkbox  checked={skills.includes('css')} onChange={handleSkillChange} />}
                        />

                        <FormControlLabel
                            label='JAVASCRIPT'
                            value='javascript'
                            control={<Checkbox  checked={skills.includes('javascript')} onChange={handleSkillChange} />}
                        />
                    </FormGroup>
                    <FormHelperText>Invakid Selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}
