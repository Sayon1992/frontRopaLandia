import React, { useState } from 'react';
import { Grid, Container, makeStyles, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {ApiGeneral} from './../API/Api'

const useStyles = makeStyles((theme) => ({
    input:{
        flexGrow: 1,
        marginTop: "10px"
    },
    root:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    password:{
        flexGrow: 1,
    },
    boton:{
        justifyContent: 'center',
    },
    numero:{
        MozAppearance: "textfield",
        WebkitAppearance: "none",
        margin: 0
    },
    colorBoton:{
        backgroundColor:""
    }
}));



export default function Registrarse() {
    const classes = useStyles();

    const [memoRegistro, setMemoRegistro] = useState(false);

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        repeatPass: '',
        showRepeatPass:false,
        email: '',
        nombreCompleto: '',
        fechaNacimiento: '',
        direccionCalle: '',
        direccionNumero: '',
        codigoPostal: '',
        documento: '',
        telefonoCelular: '',
        ciudad: ''
    });

    const registro = {
        email: values.email,
        nombreCompleto: values.nombreCompleto,
        password: values.password,
        fechaNacimiento: values.fechaNacimiento,
        direccionCalle: values.direccionCalle,
        direccionNumero: values.direccionNumero,
        codigoPostal: values.codigoPostal,
        documento: values.documento,
        telefonoCelular: values.telefonoCelular,
        ciudad: values.ciudad
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowRepeatPassword = () => {
        setValues({ ...values, showRepeatPass: !values.showRepeatPass });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const registarUsuario = () => {
        if(!memoRegistro){
            setMemoRegistro(true)
        }else{
            setMemoRegistro(false)
        }
        ApiGeneral.post('Registrarse',{registro}).then((respuesta) => {
            if(respuesta.data === true) {console.log("Usuario Registrado")} else {console.log("Error al registrar el usuario")}
        }).catch(e => {console.log(`fijate... ${e}`)})
    }
    
    return(
        <div className={classes.root}>
            <Container maxWidth="md">
                <Grid container spacing={0}>
                    <Grid item md={11}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField label="Nombre y apellido" fullWidth value={registro.nombreCompleto} onChange={handleChange('nombreCompleto')}/>
                        </form>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item md={3}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField label="Email" fullWidth value={registro.email} onChange={handleChange('email')}/>
                        </form>
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={3}>
                        <FormControl className={classes.input}>
                            <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={1}/>
                    <Grid item md={3}>
                        <FormControl className={classes.input}>
                                <InputLabel htmlFor="standard-adornment-repeat-password">Repite Contraseña</InputLabel>
                                <Input
                                    id="standard-adornment-repeat-password"
                                    type={values.showRepeatPass ? 'text' : 'password'}
                                    value={values.repeatPass}
                                    onChange={handleChange('repeatPass')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowRepeatPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {values.showRepeatPass ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item md={3}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField label="Direccion" fullWidth value={registro.direccionCalle} onChange={handleChange('direccionCalle')}/>
                        </form>
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={1}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField label="Numero" fullWidth type="number" value={registro.direccionNumero} onChange={handleChange('direccionNumero')}/>
                        </form>
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={1}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField label="C.P" type="number" fullWidth value={registro.codigoPostal} onChange={handleChange('codigoPostal')}/>
                        </form>
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={3}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField label="Ciudad" fullWidth value={registro.ciudad} onChange={handleChange('ciudad')}/>
                        </form>
                    </Grid >
                </Grid>
                <Grid container>
                    <Grid item md={3} className={classes.input}>
                        <TextField
                        label="F.Nacimiento"
                        type="date"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        fullWidth
                        format="DD-MM-AAAA"
                        value={registro.fechaNacimiento}
                        onChange={handleChange('fechaNacimiento')}
                        />
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={3}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField label="Documento" fullWidth type="number" value={registro.documento} onChange={handleChange('documento')}/>
                        </form>
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={3}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField type="number" label="Celular/Telefono" fullWidth value={registro.telefonoCelular} onChange={handleChange('telefonoCelular')}/>
                        </form>
                    </Grid >
                </Grid>
                <Grid container className={classes.boton}>
                    <Grid item md={3} className={classes.input}>
                        <Button className={classes.colorBoton} onClick={registarUsuario} variant="contained" color="primary">
                            Registrarse
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
