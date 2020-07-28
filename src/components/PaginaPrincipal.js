import React, { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles, Container } from '@material-ui/core';
import  logo from "./../imagenes/pantalon.jpg";
import { Productos } from './productos/Productos';
import Carousel from 'react-material-ui-carousel';
//import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbars/Navbar';
import Navbar2 from './Navbars/Navbar2';
import Tiendas from './tiendas/Tiendas';
import tienda1 from '../imagenes/imagentienda/fotoTienda1.jpg'
import tienda2 from '../imagenes/imagentienda/fotoTienda2.jpg'

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
    },
    carousel:{
        marginTop:'10em'
    },
    tienda:{
        alignItems:'center',
        display:'flex',
        justifyContent:'center'
    }
}))

function PaginaPrincipal({history}){
    const classes = useStyles();
    
    const tiendas = [tienda1,tienda2,tienda1,tienda2];

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
            <Navbar />
            <Navbar2 />
            <Container maxWidth="lg">
            <Grid container>
                <Carousel
                indicators="false"
                animation="fade"
                autoPlay="false"
                className={classes.carousel}>
                        {/* {productosMuestra.map(producto =>(
                            <Grid item md={3}  spacing={5}>
                                <Productos imagen={logo} precio={producto.precio} nombre={producto.nombre} onClick={history.push('/InfoProducto')}></Productos>
                            </Grid>
                        ))} */}
                        
                    <Grid container spacing={10}>
                        <Grid item md={3} spacing={5}>
                            <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                        </Grid>
                        <Grid item md={3} spacing={5}>
                            <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                        </Grid>
                        <Grid item md={3} spacing={5}>
                            <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                        </Grid>
                        <Grid item md={3} spacing={5}>
                            <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                        </Grid>
                    </Grid>
                    <Grid container spacing={10}>
                        <Grid item md={3} spacing={5}>
                            <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                        </Grid>
                        <Grid item md={3} spacing={5}>
                            <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                        </Grid>
                        <Grid item md={3} spacing={5}>
                            <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                        </Grid>
                        <Grid item md={3} spacing={5}>
                            <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                        </Grid>
                    </Grid>
                </Carousel>
            </Grid>
            <Grid container>
                <Grid item md={6} className={classes.tienda}>
                    <Carousel
                    indicators="false"
                    animation="fade"
                    autoPlay="false"
                    className={classes.carousel}
                    >
                        <Tiendas imagen={tiendas}/>
                    </Carousel>
                </Grid>
                <Grid item md={6} className={classes.tienda}>
                    <Carousel
                    indicators="false"
                    animation="fade"
                    autoPlay="false"
                    className={classes.carousel}
                    >
                        <Tiendas imagen={tiendas}/>
                        <Tiendas imagen={tiendas}/>
                    </Carousel>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default withRouter(PaginaPrincipal);