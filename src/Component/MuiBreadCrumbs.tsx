import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MuiBreadCrumbs = () => {
    return (
        <Box>
            <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small' />} 
            maxItems={3}
            // itemsAfterCollapse={2}
            itemsBeforeCollapse={2}
            >
                <Link href='#' underline='hover'>Home</Link>
                <Link href='#' underline='hover'>Catalog</Link>
                <Link href='#' underline='hover'>Accessories</Link>
                <Typography color='text.primary'>Shoes</Typography>
            </Breadcrumbs>
        </Box>
    );
};

export default MuiBreadCrumbs;