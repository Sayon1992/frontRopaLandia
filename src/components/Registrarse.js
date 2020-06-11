import React, { useState } from 'react';
import { Grid, Container, makeStyles, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import axios from 'axios';

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
        justifyContent: 'center'
    }
}));



export default function Registrarse() {
    const classes = useStyles();

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        repeatPass: '',
        showRepeatPass:false
    });

    const registro = {
        email: '',
        nombreCompleto: '',
        password: values.password,
        fechaNacimiento: '',
        direccionCalle: '',
        direccionNumero: '',
        codigoPostal: '',
        documento: '',
        telefonoCelular: '',
        ciudad: '',
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
        axios
        .post('dummy', { usuario: registro })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    return(
        <div className={classes.root}>
            <Container maxWidth="md">
                <Grid container spacing={0}>
                    <Grid item md={11}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Nombre y apellido" fullWidth value={registro.nombreCompleto}/>
                        </form>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item md={3}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Email" fullWidth value={registro.email}/>
                        </form>
                    </Grid >
                    <Grid item md={1} />
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
                    <Grid item md={1} />
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
                            <TextField id="standard-basic" label="Direccion" fullWidth value={registro.direccionCalle}/>
                        </form>
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={1}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Numero" fullWidth value={registro.direccionNumero}/>
                        </form>
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={1}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="C.P" fullWidth value={registro.codigoPostal}/>
                        </form>
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={3}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Ciudad" fullWidth value={registro.ciudad}/>
                        </form>
                    </Grid >
                </Grid>
                <Grid container>
                    <Grid item md={3} className={classes.input}>
                        <TextField
                        id="date"
                        label="F.Nacimiento"
                        type="date"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        fullWidth
                        value={registro.fechaNacimiento}
                        />
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={3}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Documento" fullWidth value={registro.documento}/>
                        </form>
                    </Grid >
                    <Grid item md={1}/>
                    <Grid item md={3}>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Celular/Telefono" fullWidth value={registro.telefonoCelular}/>
                        </form>
                    </Grid >
                </Grid>
                <Grid container className={classes.boton}>
                    <Grid item md={3} className={classes.input}>
                        <Button onClick={registarUsuario()}>
                            Registrarse
                        </Button>
                    </Grid >
                </Grid>
            </Container>
        </div>
    )
}
