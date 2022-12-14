import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

export const MuiCard = () => {
    return (
        <Box width='300px'>
            <Card>
                <CardMedia
                component='img'
                height='140'
                image='https://source.unsplash.com/random'
                alt='unsplash image'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div' >
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos omnis libero enim sed expedita a, ipsum veniam distinctio ullam nihil repellendus nisi adipisci impedit. Pariatur praesentium architecto temporibus molestias?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Shared</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>)
}
