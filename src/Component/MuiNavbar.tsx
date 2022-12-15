import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
// import  CatchingPokemonIcon from '@mui/icons-material/CatchingPokemonIcon'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    console.log("What Is anchorEl:",{anchorEl});
    
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () =>{
        setAnchorEl(null)
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} >
                    PROKOMONAPP
                </Typography>
                <Stack direction='row' spacing={2} >
                    <Button color='inherit'>Feature</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit' id='resources-button' 
                    endIcon={<KeyboardArrowDownIcon/>}
                    onClick={handleClick} aria-controls={open ? 'resources-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} >Resources</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
                <Menu 
                id='resource-menu' 
                anchorEl={anchorEl} 
                open={open} 
                MenuListProps={{ 'aria-labelledby' : 'resources-button', }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right',
                }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
