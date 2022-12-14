import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

export const MuiTextField = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined'></TextField>
                <TextField label='Name' variant='filled'></TextField>
                <TextField label='Name' variant='standard'></TextField>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' required value={value} onChange={e => setValue(e.target.value)} error={!value}
                    helperText={
                        !value ? 'Required' : 'Do Not Share Your Password With Anyone'
                    }
                />
                <TextField label='password' type='password' disabled helperText='Do Not Share Your Password With Anyone ' />
                <TextField label='Read Only' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Weight'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }}
                />
                <TextField
                    label='Weight'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                    }}
                />
            </Stack>
        </Stack>
    )
}
