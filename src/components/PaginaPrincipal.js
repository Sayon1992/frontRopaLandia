import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles, Container } from '@material-ui/core';
import  logo from "./../imagenes/pantalon.jpg";
import { Productos } from './productos/Productos';
import Carousel from 'react-material-ui-carousel';
//import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Tiendas from './tiendas/Tiendas';
import tiendasJson from './../jsonPruebas/tiendas.json'

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

    const tiendas = tiendasJson;
        
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
            {/* <Navbar />
            <Navbar2 /> */}
            <Container maxWidth="lg">
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
                    <Grid item md={3} onClick={(e, value) => {console.log(e); console.log(value)}}>
                        <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                    </Grid>
                    <Grid item md={3} >
                        <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                    </Grid>
                    <Grid item md={3} >
                        <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                    </Grid>
                    <Grid item md={3} >
                        <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                    </Grid>
                </Grid>
                <Grid container spacing={10}>
                    <Grid item md={3} >
                        <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                    </Grid>
                    <Grid item md={3}>
                        <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                    </Grid>
                    <Grid item md={3} >
                        <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                    </Grid>
                    <Grid item md={3} >
                        <Productos imagen={logo} precio="1400" nombre="Pantalon"></Productos>
                    </Grid>
                </Grid>
            </Carousel>
            <Grid container>
                {tiendas.map((tienda)=>(
                    <Grid item md={6} className={classes.tienda} key={tienda.id}>
                        <Carousel
                        indicators="false"
                        animation="fade"
                        autoPlay="false"
                        className={classes.carousel}
                        >
                            {tienda.imagenes.map((imagen)=>(
                                <Tiendas imagen={imagen} tienda={tienda} key={tienda.id}/>
                            ))}
                        </Carousel>
                    </Grid>
                ))}
            </Grid>
            </Container>
        </div>
    )
}

export default withRouter(PaginaPrincipal);