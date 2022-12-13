import React, { useState } from 'react'
import { Box, TextField, MenuItem, Stack, Typography } from '@mui/material'

export const MuiSelect = () => {
    const [country, setCountry] = useState(' ');
    console.log('select country Name:', country);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }

    const [countrys, setCountrys] = useState<string[]>([]);
    console.log('select country Name:', countrys);
    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountrys(typeof value === 'string' ? value.split(',') : value)
    }

    return (

        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <Typography variant="h6">single selector</Typography>
                <Box width='250px'>
                    <TextField
                        label=' Selector Country ' select fullWidth
                        value={country}
                        onChange={handleChange}
                    >
                        <MenuItem value='IN'>India</MenuItem>
                        <MenuItem value='US'>USA</MenuItem>
                        <MenuItem value='AU'>Austraia</MenuItem>
                    </TextField>
                </Box>
            </Stack>

            <Stack direction='row' spacing={2}>
                <Stack>
                    <Typography variant="h6">Multipal Selector</Typography>
                </Stack>
                <Box width='250px'>
                    <TextField
                        label=' Selector Country ' select fullWidth
                        value={countrys}
                        onChange={handleChanges}
                        SelectProps={{
                            multiple: true,
                        }}
                        size='small'
                        color='success'
                        helperText='Please Select Your Country'
                        error
                    >
                        <MenuItem value='IN'>India</MenuItem>
                        <MenuItem value='US'>USA</MenuItem>
                        <MenuItem value='AU'>Austraia</MenuItem>
                    </TextField>
                </Box>
            </Stack>
        </Stack>
    )
}
