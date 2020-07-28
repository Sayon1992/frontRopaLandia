import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, CardContent, CardActionArea, CardMedia } from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    fotoTienda:{
        height:400,
        width:400
        }
}))


const Tiendas = (props) => {
    const classes = useStyles();

    return(
        <div>
            <Card className={classes.fotoTienda}>
                <CardActionArea>
                    <CardMedia image={props.imagen} className={classes.fotoTienda}/>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Tiendas;