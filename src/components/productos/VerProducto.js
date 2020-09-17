import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as productsActions from "../../store/actions/products";
import PaperProductos from "./UI/PaperProductos";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
}));

function VerProducto(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const fetchProducto = async () => {
    const url = window.location.href;
    const arrayURL = url.split("/");
    const idProducto = arrayURL[4].split("-");
    idProducto.reverse();
    await dispatch(productsActions.getProducto(idProducto[0]));
  };

  useEffect(() => {
    fetchProducto();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Container>
        <Grid container className={classes.container}>
          <Grid lg={6} xl={6} item>
            <PaperProductos />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default VerProducto;
