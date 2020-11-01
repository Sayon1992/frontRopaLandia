import { Card, CardMedia } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
    height: 400,
    marginTop: 150,
  },
}));

const PaperProductos = (props) => {
  const classes = useStyles();

  const imagenes = [
    "https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/p/a/pantalon-mujer-new-balance-essentials-ft-sweatpant-wp83552ag_nb_40_i.jpg",
  ];

  if (imagenes.length > 1) {
    return (
      <Carousel navButtonsAlwaysInvisible={true}>
        {imagenes.map((imagen) => (
          <Card key={imagen} className={classes.paper}>
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
  } else {
    return (
      <Card className={classes.paper}>
        <CardMedia
          component="img"
          alt="Ropa"
          height="300"
          image={imagenes[0]}
          title="Ropa"
          className={classes.maximo}
        />
      </Card>
    );
  }
};

export default PaperProductos;
