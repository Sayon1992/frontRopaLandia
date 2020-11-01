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
import { withRouter } from "react-router-dom";
import ColorPallette from "./UI/ColorPallette";

const useStyles = makeStyles((theme) => ({
  precio: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
  },
  imagen: {
    maxWidth: 250,
    backgroundColor: "#fbf4f9",
    borderRadius: 25,
    border: {
      color: "red",
      width: 10,
      style: "solid",
    },
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
  nombreProducto: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: 26,
    fontFamily: "Sansita Swashed",
  },
  content: {
    maxHeight: 100,
  },
  colorPallette: {
    position: "absolute",
    flexDirection: "column",
  },
}));

function CardProducto(props) {
  const colores = ["red", "blue", "green", "black"];

  const classes = useStyles();

  const irAProducto = async () => {
    const urlProducto = props.nombre.replace(" ", "-");
    const urlTienda = props.tienda.replace(" ", "-");
    props.history.push(`/VerProducto/${urlTienda}-${urlProducto}-${props.id}`);
  };

  return (
    <div>
      <Card className={classes.imagen}>
        <CardActionArea onClick={irAProducto}>
          <CardMedia
            component="img"
            alt="Ropa"
            height="300"
            image={props.imagen}
            title="Ropa"
            className={classes.maximo}
          />
          <CardContent className={classes.content}>
            <div className={classes.colorPallette}>
              {colores.map((color) => (
                <ColorPallette color={color} />
              ))}
            </div>
            <Typography
              className={classes.nombreProducto}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {props.nombre}
            </Typography>
            <Typography variant="h6" className={classes.precio}>
              ${props.precio}
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

export default withRouter(CardProducto);
