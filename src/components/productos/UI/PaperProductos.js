import { Card, CardMedia } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
//import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
    height: 600,
  },
}));

const PaperProductos = (props) => {
  const classes = useStyles();
  return (
    <Carousel>
      {props.imagenes.map((imagen) => (
        <Card className={classes.paper}>
          <CardMedia
            component="img"
            alt="Ropa"
            height="300"
            image={imagen}
            title="Ropa"
            className={classes.maximo}
          />
        </Card>
      ))}
    </Carousel>
  );
};

export default PaperProductos;
