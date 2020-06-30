import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia, Grid, Container} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      marginLeft: '10%',
      marginTop:'8%'
    },
    media: {
      height: 500,
      width:400,
    },
  }));

const AltaProducto = () => {

    const classes = useStyles();

  return (
    <div>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://1.bp.blogspot.com/-rgm8pHvQUps/V8R_6c75FUI/AAAAAAAACRo/O0TPA4bRsYcNtP5OacBWfNHdIgomtNkhQCLcB/s1600/lanzamiento%2Benanos.jpg"
                title="Enano Volador"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://1.bp.blogspot.com/-rgm8pHvQUps/V8R_6c75FUI/AAAAAAAACRo/O0TPA4bRsYcNtP5OacBWfNHdIgomtNkhQCLcB/s1600/lanzamiento%2Benanos.jpg"
                title="Enano Volador"
              />
            </Card>
          </Grid>
        </Grid>


    </div>

     );
}
 
export default AltaProducto;