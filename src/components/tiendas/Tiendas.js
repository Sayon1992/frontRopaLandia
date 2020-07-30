import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, CardActionArea, CardMedia } from '@material-ui/core'
import { withRouter } from 'react-router-dom'


const useStyles = makeStyles((theme)=>({
    fotoTienda:{
        height:400,
        width:400
        }
}))


const Tiendas = (props) => {
    const classes = useStyles();

    const irATienda = (irAtienda) => {
        console.log(irAtienda)
        const urlTienda = irAtienda.nombre.replace(' ','-');
        props.history.push(`/VerTienda/${urlTienda}-${irAtienda.id}`);
    }

    return(
        <div onClick={()=>{irATienda(props.tienda)}}>
            <Card className={classes.fotoTienda}>
                <CardActionArea>
                    <CardMedia image={props.imagen.imagen} className={classes.fotoTienda}/>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default withRouter(Tiendas);