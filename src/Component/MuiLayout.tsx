import { Box, Stack, Divider, Grid, Paper } from '@mui/material'
import React from 'react'

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px'}}  elevation={4}>
   <Stack sx={{
    border: '1px solid'}}
    // direction='column'
    // direction='column-revers'
    // direction='row-revers'
    direction='row' 
    spacing={2}
    divider={<Divider orientation='vertical' flexItem/>}
    >
    <Box
    sx={{
        width:'100px',
        height:'100px',
        padding:'16px',
        backgroundColor:'primary.light',
        color:'white',
        '&:hover':{
            backgroundColor:'primary.main',
        },
    }}
    >Codevalution</Box>
    <Box display='flex' width='100px' height='100px' bgcolor='success.light' p={2} ></Box>
   </Stack>
   <Grid container my={4} rowSpacing={2} columnSpacing={1}>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}> Item1 </Box>
    </Grid>
    <Grid item xs={6} >
        <Box bgcolor='primary.light' p={2}> Item2 </Box>
    </Grid>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}> Item3 </Box>
    </Grid>
    <Grid item xs={6}>
        <Box bgcolor='primary.light' p={2}> Item4 </Box>
    </Grid>
   </Grid>
   </Paper>
  )
}
