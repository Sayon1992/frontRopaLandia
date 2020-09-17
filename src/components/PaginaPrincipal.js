import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Container } from "@material-ui/core";
import CardProducto from "./productos/CardProducto";
import Carousel from "react-material-ui-carousel";
//import axios from 'axios';
import { withRouter } from "react-router-dom";
import Tiendas from "./tiendas/Tiendas";
import tiendasJson from "./../jsonPruebas/tiendas.json";
import productosTendencia from "../jsonPruebas/productosTendencia.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "Raleway",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "100px",
  },
  image: {
    maxWidth: "50px",
    maxHeight: "250px",
  },
  carousel: {
    marginTop: "10em",
  },
  tienda: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

function PaginaPrincipal({ history }) {
  const classes = useStyles();

  const tiendas = tiendasJson;

  const productosMuestra = productosTendencia;

  // useEffect(()=>{
  //     axios.get('dummy').then(result =>{
  //         const tiendasData = result.data;
  //         forEach(tienda in tiendaData){
  //             tiendas.push(tienda)
  //         }
  //     })
  // },[])
  /*    useEffect(() => {
        axios.get('dummy').then(result => {
            const productosData = result.data;
            const productosLlamada = [];
            for(const key in productosData){
                productosLlamada.push({id: key, nombre: productosData[key].nombre, precio: productosData[key].precio, imagen: productosData[key].imagen})
            }
            dispatch({ type: 'SET', payload: productosLlamada });
        })
        return () => {

        }
    },[]) **/
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Carousel
          indicators="false"
          animation="fade"
          autoPlay="false"
          className={classes.carousel}
        >
          {productosMuestra.map((arrayProducto, index) => (
            <Grid container spacing={5} key={index}>
              {arrayProducto.map((producto) => (
                <Grid item md={3} key={producto.id}>
                  <CardProducto
                    id={producto.id}
                    imagen={producto.imagen}
                    precio={producto.precio}
                    nombre={producto.nombre}
                    tienda={producto.tienda}
                  ></CardProducto>
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>
        <Grid container>
          {tiendas.map((tienda) => (
            <Grid item md={6} className={classes.tienda} key={tienda.id}>
              <Carousel
                indicators="false"
                animation="fade"
                autoPlay="false"
                className={classes.carousel}
              >
                {tienda.imagenes.map((imagen) => (
                  <Tiendas imagen={imagen} tienda={tienda} key={tienda.id} />
                ))}
              </Carousel>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default withRouter(PaginaPrincipal);
