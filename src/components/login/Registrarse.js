import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ContextLogin } from "../../context/loginContext";
import * as authActions from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  input: {
    flexGrow: 1,
    marginTop: "10px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  password: {
    flexGrow: 1,
  },
  boton: {
    justifyContent: "center",
  },
  numero: {
    MozAppearance: "textfield",
    WebkitAppearance: "none",
    margin: 0,
  },
  colorBoton: {
    marginTop: 50,
  },
  container: {
    marginTop: 70,
  },
}));

function Registrarse(props) {
  const classes = useStyles();

  const { setNavbar } = ContextLogin();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    repeatPass: "",
    showRepeatPass: false,
    email: "",
    nombreCompleto: "",
    fechaNacimiento: "",
    direccionCalle: "",
    direccionNumero: "",
    codigoPostal: "",
    documento: "",
    telefonoCelular: "",
    ciudad: "",
    tipoCliente: 1,
    tipoTienda: 1,
    numeroPiso: "",
    cuit: "",
  });

  useEffect(() => {
    setNavbar(false);
    return () => {
      setNavbar(true);
    };
  });

  const dispatch = useDispatch();

  // const registro = {
  //   email: values.email,
  //   nombreCompleto: values.nombreCompleto,
  //   password: values.password,
  //   fechaNacimiento: values.fechaNacimiento,
  //   direccionCalle: values.direccionCalle,
  //   direccionNumero: values.direccionNumero,
  //   codigoPostal: values.codigoPostal,
  //   documento: values.documento,
  //   telefonoCelular: values.telefonoCelular,
  //   ciudad: values.ciudad,
  //   tipoCliente: values.tipoCliente,
  //   tipoTienda: values.tipoTienda,
  // };

  const vendedor = () => {
    return (
      <React.Fragment>
        <Grid item md={3} className={classes.input}>
          <InputLabel id="tipoTienda">Tipo de tienda</InputLabel>
          <Select
            labelId="tipoTienda"
            id="selectTienda"
            value={values.tipoTienda}
            onChange={handleChange("tipoTienda")}
            fullWidth
          >
            <MenuItem value={1}>Unisex</MenuItem>
            <MenuItem value={2}>Mujer</MenuItem>
            <MenuItem value={3}>Hombre</MenuItem>
            <MenuItem value={4}>Niños</MenuItem>
          </Select>
        </Grid>
        <Grid item md={1} />
        <Grid item md={3}>
          <form className={classes.input} noValidate autoComplete="off">
            <TextField
              label="CUIT"
              fullWidth
              type="number"
              value={values.cuit}
              onChange={handleChange("cuit")}
            />
          </form>
        </Grid>
      </React.Fragment>
    );
  };

  const comprador = () => {
    return (
      <React.Fragment>
        <Grid item md={3} className={classes.input}>
          <TextField
            label="F.Nacimiento"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            format="DD-MM-AAAA"
            value={values.fechaNacimiento}
            onChange={handleChange("fechaNacimiento")}
          />
        </Grid>
        <Grid item md={1} />
        <Grid item md={3}>
          <form className={classes.input} noValidate autoComplete="off">
            <TextField
              label="CUIT"
              fullWidth
              type="number"
              value={values.cuit}
              onChange={handleChange("cuit")}
            />
          </form>
        </Grid>
      </React.Fragment>
    );
  };

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

  const registrarse = async () => {
    const urlRegistrado = values.nombreCompleto.replace(" ", "-");
    if (values.tipoCliente === 1) {
      await dispatch(authActions.signUpTienda(values));
      props.history.push(`/Registrado?tienda=${urlRegistrado}`);
    } else {
      await dispatch(authActions.signUpUsuario(values));
      props.history.push(`/Registrado?tienda=${urlRegistrado}`);
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={0}>
          <Grid item md={11}>
            <form className={classes.input} noValidate autoComplete="off">
              <TextField
                label="Nombre y apellido"
                fullWidth
                value={values.nombreCompleto}
                onChange={handleChange("nombreCompleto")}
              />
            </form>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={3}>
            <form className={classes.input} noValidate autoComplete="off">
              <TextField
                label="Email"
                fullWidth
                value={values.email}
                onChange={handleChange("email")}
              />
            </form>
          </Grid>
          <Grid item md={1} />
          <Grid item md={3}>
            <FormControl className={classes.input}>
              <InputLabel htmlFor="standard-adornment-password">
                Contraseña
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
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
              <InputLabel htmlFor="standard-adornment-repeat-password">
                Repite Contraseña
              </InputLabel>
              <Input
                id="standard-adornment-repeat-password"
                type={values.showRepeatPass ? "text" : "password"}
                value={values.repeatPass}
                onChange={handleChange("repeatPass")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowRepeatPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showRepeatPass ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
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
              <TextField
                label="Direccion"
                fullWidth
                value={values.direccionCalle}
                onChange={handleChange("direccionCalle")}
              />
            </form>
          </Grid>
          <Grid item md={1} />
          <Grid item md={1}>
            <form className={classes.input} noValidate autoComplete="off">
              <TextField
                label="Numero"
                fullWidth
                type="number"
                value={values.direccionNumero}
                onChange={handleChange("direccionNumero")}
              />
            </form>
          </Grid>
          <Grid item md={1} />
          <Grid item md={1}>
            <form className={classes.input} noValidate autoComplete="off">
              <TextField
                label="C.P"
                type="number"
                fullWidth
                value={values.codigoPostal}
                onChange={handleChange("codigoPostal")}
              />
            </form>
          </Grid>
          <Grid item md={1} />
          <Grid item md={3}>
            <form className={classes.input} noValidate autoComplete="off">
              <TextField
                label="Ciudad"
                fullWidth
                value={values.ciudad}
                onChange={handleChange("ciudad")}
              />
            </form>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={3}>
            <form className={classes.input} noValidate autoComplete="off">
              <TextField
                label="Numero/Piso"
                fullWidth
                value={values.numeroPise}
                onChange={handleChange("numeroPiso")}
              />
            </form>
          </Grid>
          <Grid item md={1} />
          <Grid item md={3} className={classes.input}>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.tipoCliente}
              onChange={handleChange("tipoCliente")}
              fullWidth
            >
              <MenuItem value={1}>Vendedor</MenuItem>
              <MenuItem value={2}>Comprador</MenuItem>
            </Select>
          </Grid>
          <Grid item md={1} />
          <Grid item md={3}>
            <form className={classes.input} noValidate autoComplete="off">
              <TextField
                label="Documento"
                fullWidth
                type="number"
                value={values.documento}
                onChange={handleChange("documento")}
              />
            </form>
          </Grid>
          <Grid item md={1} />
        </Grid>
        <Grid container>
          <Grid item md={3}>
            <form className={classes.input} noValidate autoComplete="off">
              <TextField
                type="number"
                label="Celular/Telefono"
                fullWidth
                value={values.telefonoCelular}
                onChange={handleChange("telefonoCelular")}
              />
            </form>
          </Grid>
          <Grid item md={1} />
          {values.tipoCliente === 1 ? vendedor() : comprador()}
        </Grid>
        <Grid container className={classes.boton}>
          <Grid item md={3} className={classes.input}>
            <Button
              className={classes.colorBoton}
              onClick={registrarse}
              variant="contained"
              color="primary"
            >
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withRouter(Registrarse);
