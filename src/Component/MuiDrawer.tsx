import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

export const MuiDrawer = () => {
  const [IsDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
      
      <Drawer  anchor='left'
        open={IsDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px"  textAlign='center' role='presentation'>
          <Typography variant='h2' component='div'>
            Side Bar
          </Typography>
        </Box>
      </Drawer>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)} >
        <MenuIcon />
      </IconButton>
    </>
  )
}
