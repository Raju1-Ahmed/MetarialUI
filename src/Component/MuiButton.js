import { Button, IconButton, Stack } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import AddAlertIcon from '@mui/icons-material/AddAlert';

const MuiButton = () => {
    return (
        <stack spacing={4}>
            <Stack spacing={2} direction="row" >
            <Button variant='text' href="http://google.com">Text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
           
        </Stack>
        <stack spacing={2} direction="row">
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">warning</Button>
            <Button variant="contained" color="info">info</Button>
            <Button variant="contained" color="success">success</Button>
        </stack>
        <stack>
            <stack display='block' spacing={2} direction="row">
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
            </stack>
        </stack>
        <stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>}>SendEnd</Button>
            <Button variant='contained' size='large'
            startIcon={<AddAlertIcon/>}
                onClick={() => alert('clicked')}
                >
                    Alert
                </Button>
            <IconButton color='success'size='small' aria-label='send'>
                <SendIcon></SendIcon>
            </IconButton>
        </stack>
        </stack>
    );
};

export default MuiButton;