import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import AddAlertIcon from '@mui/icons-material/AddAlert';

const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log(
        formats,
    );
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row" >
                <Button variant='text' href="http://google.com">Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">warning</Button>
                <Button variant="contained" color="info">info</Button>
                <Button variant="contained" color="success">success</Button>
            </Stack>
            <Stack>
                <Stack display='block' spacing={2} direction="row">
                    <Button variant='contained' size='small'>
                        small
                    </Button>
                    <Button variant='contained' size='medium'>
                        Medium
                    </Button>
                    <Button variant='contained' size='large' disableRipple
                        onClick={() => alert('clicked')}
                    >
                        Large
                    </Button>
                </Stack>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />}>SendEnd</Button>
                <Button variant='contained' size='large'
                    startIcon={<AddAlertIcon />}
                    onClick={() => alert('clicked')}
                >
                    Alert
                </Button>
                <IconButton color='success' size='small' aria-label='send'>
                    <SendIcon></SendIcon>
                </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup
                    variant='contained'
                    orientation='vertical'
                    size='small'
                    color='secondary'
                    aria-label='alignment button group'
                >
                    <Button
                        onClick={() => alert('left clicked')}
                    >Left</Button>
                    <Button>Center</Button>
                    <Button>right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting'
                value={formats}onChange={handleFormatChange}
                color='success'
                orientation='vertical'
                exclusive
                >

                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>

                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalicIcon />
                    </ToggleButton>

                    <ToggleButton value='underline' aria-label='underline'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>

                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};

export default MuiButton;