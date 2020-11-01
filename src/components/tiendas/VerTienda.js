import React, { useEffect, useState } from "react";
// import productosTienda from "../../jsonPruebas/verTiendaElegida.json";
import CompDrawer from "../productos/CompDrawer";
import articulosTienda from "../../jsonPruebas/articulos.json";
import CardProducto from "../productos/CardProducto";
import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerTienda: {
    flex: 1,
    paddingLeft: 400,
    marginTop: 125,
  },
  items: {
    marginTop: 10,
  },
  containerTiendaMobile: {
    flex: 1,
    marginTop: 125,
  },
}));

const VerTienda = () => {
  const media = useMediaQuery('(max-width:425px)');
  const classes = useStyles();
  const [articulos, setArticulos] = useState([]);
  const [cardArticulo, setCardArticulo] = useState([]);

  const limitarArticulos = (checked) => {
    let nuevoCheck = checked;
    nuevoCheck = nuevoCheck.slice(1, checked.length);
    console.log(nuevoCheck);
    setCardArticulo(
      nuevoCheck.map((article) => article[0][`${Object.keys(article[0])}`])
    );
    // setCardArticulo(
    //    ...checked.map((article) => article[0][`${Object.keys(article[0])}`])
    //  );
  };

  useEffect(() => {
    setArticulos(articulosTienda);
    setCardArticulo([
      ...articulosTienda.map(
        (article) => article[0][`${Object.keys(article[0])}`]
      ),
    ]);
    // eslint-disable-next-line
  }, [articulos]);

  return (
    <div>
      {media ? <>
        <Grid container className={classes.containerTiendaMobile}>
        {cardArticulo.map((items) => {
          return (
            <React.Fragment key={items[0].id}>
              {items.map((item) => {
                return (
                  <Grid key={item.id} item xs={6} sm={4} md={3} className={classes.items}>
                    <CardProducto
                      nombre={item.id}
                      key={item.id}
                      precio={item.precio}
                      imagen={item.imagen}
                    />
                  </Grid>
                );
              })}
            </React.Fragment>
          );
        })}
      </Grid>
      </> : <> <CompDrawer articulos={articulos} limitarArticulos={limitarArticulos} />
      {/* eslint-disable-next-line}*/}
      <Grid container className={classes.containerTienda}>
        {cardArticulo.map((items) => {
          return (
            <React.Fragment key={items[0].id}>
              {items.map((item) => {
                return (
                  <Grid key={item.id} item xs={6} sm={4} md={3} className={classes.items}>
                    <CardProducto
                      nombre={item.id}
                      key={item.id}
                      precio={item.precio}
                      imagen={item.imagen}
                    />
                  </Grid>
                );
              })}
            </React.Fragment>
          );
        })}
      </Grid> </>}
      
    </div>
  );
};

export default VerTienda;
