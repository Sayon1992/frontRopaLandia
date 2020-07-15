import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid, Container, Typography, CardContent, CardActions, Button, TextField, FormControl, MenuItem, InputLabel, Select, InputAdornment} from '@material-ui/core';
import ImageUploader from 'react-images-upload';
import imageCompression from 'browser-image-compression';

const useStyles = makeStyles((theme) => ({
    introduccion: {
      minWidth: 275,
      marginTop:'2%'
    },
    title: {
      fontSize: 20,
    },
    aviso:{
      fontSize: 15,
    },
    inputTitulo:{
      marginTop: "1%"
    },
    inputSelect:{
      minWidth: 120,
    },
    inputSelect2:{
      marginLeft: "2%",
      minWidth: 120,
    },
    uploader:{
      alignItems:"center",
      alignSelf:"center"
    }
  }));

const AltaProducto = () => {
  
  const [values, setValues] = useState({
      tipoProducto: 0,
      nombreProducto: '',
      subTipoProducto: 0,
      tipoGenero: 0,
      precioProducto: 0
  });

  const [picture,setPicture] = useState([])

  const [checks,setChecks] = useState({
    nombreProducto: false,
    categoriaProducto: false,
    precioProducto: false,
    imagenProducto:false
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCheckNombreProducto = () => {
    setChecks({ ...checks, nombreProducto: !checks.nombreProducto });
  };
  const handleCheckCategoriaProducto = () => {
    setChecks({ ...checks, categoriaProducto: !checks.categoriaProducto });
  };
  const handleCheckPrecioProducto = () => {
    setChecks({ ...checks, precioProducto: !checks.precioProducto });
  };
  const handleCheckImagenProducto = () => {
    setChecks({ ...checks, imagenProducto: !checks.imagenProducto });
  };

  async function onDrop (imagen){
    const imageFile = imagen[0];  
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob);
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);
      setPicture(picture.concat(compressedFile));
    } catch (error) {
      console.log(error);
    }
  }

  const classes = useStyles();

  const condicionalHombreMujer = () => {
    if(values.tipoProducto !== 0){
      return(
        <FormControl className={classes.inputSelect2}>
            <InputLabel id="tipoGenero">Tipo</InputLabel>
            <Select
              labelId="tipoGenero"
              value={values.tipoGenero}
              onChange={handleChange('tipoGenero')}
              disabled={checks.categoriaProducto}
            >
              <MenuItem value={1}>Hombre</MenuItem>
              <MenuItem value={2}>Mujer</MenuItem>
              <MenuItem value={3}>Infantil</MenuItem>
            </Select>
          </FormControl>
      )
    }
  }

  const condicionalTipoProducto = () =>{
    if(values.tipoGenero === 1){
      if(values.tipoProducto === 1){
        return(
            <FormControl className={classes.inputSelect2}>
              <InputLabel id="subTipoProducto">Tipo</InputLabel>
              <Select
                labelId="subTipoProducto"
                value={values.subTipoProducto}
                onChange={handleChange('subTipoProducto')}
                disabled={checks.categoriaProducto}
              >
                <MenuItem value={1}>Camperas</MenuItem>
                <MenuItem value={2}>Remeras</MenuItem>
                <MenuItem value={3}>Buzos</MenuItem>
                <MenuItem value={4}>Sweaters</MenuItem>
                <MenuItem value={5}>Jeans</MenuItem>
                <MenuItem value={6}>Ropa Interior</MenuItem>
                <MenuItem value={7}>Cardigans</MenuItem>
                <MenuItem value={8}>Chombas</MenuItem>
                <MenuItem value={9}>Pantalones</MenuItem>
                <MenuItem value={10}>Joggings</MenuItem>
                <MenuItem value={11}>Chalecos</MenuItem>
                <MenuItem value={12}>Trajes de baño</MenuItem>
              </Select>
            </FormControl>
        );
      }else if(values.tipoProducto === 2){
        return(
          <FormControl className={classes.inputSelect2}>
            <InputLabel id="subTipoProducto">Tipo</InputLabel>
            <Select
              labelId="subTipoProducto"
              value={values.subTipoProducto}
              onChange={handleChange('subTipoProducto')}
              disabled={checks.categoriaProducto}
            >
              <MenuItem value={1}>Zapatillas</MenuItem>
              <MenuItem value={2}>Zapatos</MenuItem>
              <MenuItem value={3}>Borcegos</MenuItem>
              <MenuItem value={4}>Botas</MenuItem>
              <MenuItem value={5}>Panchas</MenuItem>
              <MenuItem value={6}>Mocasines</MenuItem>
              <MenuItem value={7}>Sandalias</MenuItem>
              <MenuItem value={8}>Ojotas</MenuItem>
            </Select>
          </FormControl>
        );
      }else if(values.tipoProducto === 3){
        return(
          <FormControl className={classes.inputSelect2}>
            <InputLabel id="subTipoProducto">Tipo</InputLabel>
            <Select
              labelId="subTipoProducto"
              value={values.subTipoProducto}
              onChange={handleChange('subTipoProducto')}
              disabled={checks.categoriaProducto}
            >
              <MenuItem value={1}>Mochilas</MenuItem>
              <MenuItem value={2}>Relojes</MenuItem>
              <MenuItem value={3}>Bolsos</MenuItem>
              <MenuItem value={4}>Cinturones</MenuItem>
              <MenuItem value={5}>Anteojos de sol</MenuItem>
              <MenuItem value={6}>Valijas</MenuItem>
              <MenuItem value={7}>Billeteras</MenuItem>
              <MenuItem value={8}>Bufandas</MenuItem>
              <MenuItem value={9}>Joyeria</MenuItem>
            </Select>
          </FormControl>
        );
      }
    }
    if(values.tipoGenero === 2){
      if(values.tipoProducto === 1){
        return(
          <FormControl className={classes.inputSelect2}>
            <InputLabel id="subTipoProducto">Tipo</InputLabel>
            <Select
              labelId="subTipoProducto"
              value={values.subTipoProducto}
              onChange={handleChange('subTipoProducto')}
              disabled={checks.categoriaProducto}
            >
              <MenuItem value={1}>Blusas</MenuItem>
              <MenuItem value={2}>Buzos</MenuItem>
              <MenuItem value={3}>Camisas</MenuItem>
              <MenuItem value={4}>Camperas</MenuItem>
              <MenuItem value={5}>Cardigans</MenuItem>
              <MenuItem value={6}>Jeans</MenuItem>
              <MenuItem value={7}>Monos</MenuItem>
              <MenuItem value={8}>Pantalones</MenuItem>
              <MenuItem value={9}>Remeras</MenuItem>
              <MenuItem value={10}>Ropa Interior</MenuItem>
              <MenuItem value={11}>Sweaters</MenuItem>
              <MenuItem value={12}>Tapados</MenuItem>
              <MenuItem value={13}>Vestidos</MenuItem>
            </Select>
          </FormControl>
        );
      }
      if(values.tipoProducto === 2){
        return(
          <FormControl className={classes.inputSelect2}>
            <InputLabel id="subTipoProducto">Tipo</InputLabel>
            <Select
              labelId="subTipoProducto"
              value={values.subTipoProducto}
              onChange={handleChange('subTipoProducto')}
              disabled={checks.categoriaProducto}
            >
              <MenuItem value={1}>Botas</MenuItem>
              <MenuItem value={2}>Borcegos</MenuItem>
              <MenuItem value={3}>Chatitas</MenuItem>
              <MenuItem value={4}>Mocasines</MenuItem>
              <MenuItem value={5}>Ojotas</MenuItem>
              <MenuItem value={6}>Panchas</MenuItem>
              <MenuItem value={7}>Sandalias</MenuItem>
              <MenuItem value={8}>Slides</MenuItem>
              <MenuItem value={9}>Zapatillas</MenuItem>
              <MenuItem value={10}>Zapatos</MenuItem>
              <MenuItem value={11}>Zuecos</MenuItem>
            </Select>
          </FormControl>
        );
      }
      if(values.tipoProducto === 3){
        return(
          <FormControl className={classes.inputSelect2}>
            <InputLabel id="subTipoProducto">Tipo</InputLabel>
            <Select
              labelId="subTipoProducto"
              value={values.subTipoProducto}
              onChange={handleChange('subTipoProducto')}
              disabled={checks.categoriaProducto}
            >
              <MenuItem value={1}>Anteojos</MenuItem>
              <MenuItem value={2}>Carteras</MenuItem>
              <MenuItem value={3}>Bolsos</MenuItem>
              <MenuItem value={4}>Mochilas</MenuItem>
              <MenuItem value={5}>Relojes</MenuItem>
              <MenuItem value={6}>Billeteras</MenuItem>
              <MenuItem value={7}>Cinturones</MenuItem>
              <MenuItem value={8}>Riñoneras</MenuItem>
              <MenuItem value={9}>Pashminas</MenuItem>
              <MenuItem value={10}>Bijou</MenuItem>
              <MenuItem value={11}>Gorros</MenuItem>
              <MenuItem value={12}>Sombreros</MenuItem>
              <MenuItem value={13}>Tapabocas</MenuItem>
            </Select>
          </FormControl>
        );
      }
    }
  }

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.introduccion} variant="elevation">
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Elegi el titulo de tu producto
                </Typography>
                <Typography className={classes.aviso}>
                  Recorda, que el titulo es lo esencial por lo que se va a buscar tu producto, aparte de la categoria y su descripcion
                </Typography>
                <TextField fullWidth disabled={checks.nombreProducto} className={classes.inputTitulo} label="Titulo de producto" onChange={handleChange('nombreProducto')}/>
              </CardContent>
              <CardActions>
                <Button size="small" disabled={checks.nombreProducto} onClick={handleCheckNombreProducto}>Listo</Button>
                <Button size="small" disabled={!checks.nombreProducto} onClick={handleCheckNombreProducto}>Atras</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            {checks.nombreProducto === true?
            <Card className={classes.introduccion} variant="elevation">
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Elegi la categoria de tu producto
                </Typography>
                <FormControl className={classes.inputSelect}>
                  <InputLabel id="tipoProducto">Tipo</InputLabel>
                  <Select
                    labelId="tipoProducto"
                    value={values.tipoProducto}
                    onChange={handleChange('tipoProducto')}
                    disabled={checks.categoriaProducto}
                  >
                    <MenuItem value={1}>Ropa</MenuItem>
                    <MenuItem value={2}>Calzados</MenuItem>
                    <MenuItem value={3}>Accesorios</MenuItem>
                  </Select>
                </FormControl>
                {condicionalHombreMujer()}
                {condicionalTipoProducto()}
              </CardContent>
              <CardActions>
                <Button size="small" disabled={checks.categoriaProducto} onClick={handleCheckCategoriaProducto}>Listo</Button>
                <Button size="small" disabled={!checks.categoriaProducto} onClick={handleCheckCategoriaProducto}>Atras</Button>
              </CardActions>
            </Card>
            :null}
          </Grid>
          <Grid item xs={12}>
          {checks.categoriaProducto === true?
          <Card className={classes.introduccion} variant="elevation">
              <CardContent>
              <Typography className={classes.title} gutterBottom>
                Sube una imagen de tu producto
              </Typography>
              <div className={classes.uploader}>  
                <ImageUploader
                withLabel
                withPreview
                label="5MB Máximo. jpg o png"
                withIcon={true}
                buttonText='Elegir Imagenes'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                fileSizeError="La imagen es demsiado pesada"
                />
              </div>
              </CardContent>
              <CardActions>
              <Button size="small" disabled={checks.imagenProducto} onClick={handleCheckImagenProducto}>Listo</Button>
              <Button size="small" disabled={!checks.imagenProducto} onClick={handleCheckImagenProducto}>Atras</Button>
              </CardActions>
            </Card>
            :null}
          </Grid>
          <Grid item xs={12}>
            {checks.imagenProducto === true?
            <Card className={classes.introduccion} variant="elevation">
              <CardContent>
              <Typography className={classes.title} gutterBottom>
                Elige un precio para tu producto
              </Typography>
              <TextField
                className={classes.uploader}
                label="Precio"
                id="Precio"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                type='number'
                variant="outlined"
                onChange={handleChange('precioProducto')}
                value={values.precioProducto}
              />
              </CardContent>
              <CardActions>
              <Button size="small" disabled={checks.imagenProducto} onClick={handleCheckImagenProducto}>Listo</Button>
              <Button size="small" disabled={!checks.imagenProducto} onClick={handleCheckImagenProducto}>Atras</Button>
              </CardActions>
            </Card>
            :null}
          </Grid>
          <Grid item xs={12}>
            
          </Grid>
        </Grid>
      </Container>
    </div>

     );
}
 
export default AltaProducto;