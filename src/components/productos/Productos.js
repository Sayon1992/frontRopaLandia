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
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  precio: {
    fontWeight: 20,
  },
  imagen: {
    maxWidth: 250,
    backgroundColor: "#fbf4f9",
  },
  mostrarMas: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const Productos = (props) => {
  const classes = useStyles();

  return (
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
        <Button size="small" style={{ color: "black" }}>
          <AddShoppingCartIcon></AddShoppingCartIcon>
        </Button>
        <Button size="small" style={{ color: "black" }}>
          <MoreVertIcon></MoreVertIcon>
        </Button>
      </CardActions>
    </Card>
  );
};
