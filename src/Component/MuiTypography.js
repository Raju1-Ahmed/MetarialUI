import { Typography } from '@mui/material';
import React from 'react';

const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>
            <Typography variant="h4">h4 Heading</Typography>


            <Typography variant="subtitle1">sub title1</Typography>
            <Typography variant="subtitle2">sub title2</Typography>



            <Typography >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quae temporibus iusto quam eligendi quos neque mollitia illum est aliquam! Eaque vitae, alias dolores velit dolore deserunt quae similique eveniet.</Typography>

            <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat officiis nulla aliquam a ipsa molestias ab nobis nihil totam excepturi veritatis, nam quibusdam modi officia aliquid architecto culpa asperiores aperiam? sub title2</Typography>
        </div>
    );
};

export default MuiTypography;