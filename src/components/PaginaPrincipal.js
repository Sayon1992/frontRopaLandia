import React, {useEffect, useReducer} from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles, Container, Typography } from '@material-ui/core';
import  logo from "./../imagenes/pantalon.jpg";
import { Productos } from './productos/Productos';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import CompDrawer from './productos/CompDrawer';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
    },
    title:{
        fontFamily:"Raleway",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:"100px"
    },
    image:{
        maxWidth:"50px",
        maxHeight:"250px",
    }
}))

function PaginaPrincipal({history}){
    const classes = useStyles();

    const todoListReducer = (state, action) => {
        switch (action.type) {
          case 'SET':
            return action.payload;
          default:
            return state;
        }
      };

    const [productosMuestra, dispatch] = useReducer(todoListReducer, []);
      
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
            <CompDrawer />
            <Container maxWidth="lg">
                <Typography className={classes.title}>
                    
                </Typography>
                <Carousel
                indicators="false"
                animation="fade"
                autoPlay="false">
                    <Grid container spacing={10}>
                        {productosMuestra.map(producto =>(
                            <Grid item md={3}  spacing={5}>
                                <Productos imagen={logo} precio={producto.precio} nombre={producto.nombre} onClick={history.push('/InfoProducto')}></Productos>
                            </Grid>
                        ))}
                    </Grid>
                </Carousel>
            </Container>
        </div>
    )
}

export default withRouter(PaginaPrincipal);