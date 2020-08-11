import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  precio: {
    fontWeight: 20,
  },
  imagen: {
    maxWidth: 250,
    backgroundColor: "#fbf4f9",
    borderRadius: 25,
  },
  mostrarMas: {
    display: "flex",
    justifyContent: "center",
  },
  buttonShopping: {
    transitionDuration: 300,
    transitionProperty: "transform",
    borderRadius: 25,
    "&:hover": {
      transform: "scale(1.5,1.5)",
      transitionDuration: 300,
    },
  },
}));

function CardProducto(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.imagen}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Ropa"
            height="300"
            image={props.imagen}
            title="Ropa"
            className={classes.maximo}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.nombre}
            </Typography>
            <Typography variant="h6" className={classes.precio}>
              {props.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.mostrarMas}>
          <Button size="small" className={classes.buttonShopping}>
            <AddShoppingCartIcon></AddShoppingCartIcon>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardProducto;
