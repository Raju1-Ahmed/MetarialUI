import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';



const MuiLearn = () => {


  return (
    <div>
      <Grid container
        direction="row"
        justifyContent="space-around"
        alignItems="center"

      >
        <Grid item>
          <Paper style={{ background: "red", width: 150, height: 200, }} >
            <Grid
              container
              space={3}
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item>  <Paper style={{ background: "black", width: 20, height: 20, }}>
                <Typography variant="caption" display="block" gutterBottom>
                  caption text
                </Typography>

              </Paper> </Grid>
              <Grid item>  <Paper style={{ background: "green", width: 20, height: 20, }}>  </Paper></Grid>
              <Grid item> <Paper style={{ background: "blue", width: 20, height: 20, }}> </Paper> </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={{ background: "green", width: 150, height: 200, }} />
        </Grid>
        <Grid item>
          <Paper style={{ background: "blue", width: 150, height: 200, }} />
        </Grid>
      </Grid>










      
    </div>
  );
};

export default MuiLearn;