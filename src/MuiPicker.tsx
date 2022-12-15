import React, { useState } from 'react'
import { Stack, TextField} from '@mui/material';
import { DatePicker } from '@mui/lab'


export const MuiPicker = () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
        <Stack spacing={3} sx={{ width: '25px' }}>
            <DatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={(newValue) =>{
                    setValue(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </Stack>

    )
}
