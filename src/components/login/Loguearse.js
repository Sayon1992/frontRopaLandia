import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { ContextLogin } from "../../context/loginContext";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="localhost:3000">
        RopaLandia
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#faeee7",
    color: "black",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    backgroundColor: "#8ccbbe",
  },
  container: {
    marginTop: "5rem",
  },
}));

function Loguearse({ history }) {
  const { setNavbar } = ContextLogin();

  const dispatch = useDispatch();

  const classes = useStyles();

  const [values, setValues] = useState({
    email: "",
    password: "",
    tipo: 0,
  });

  useEffect(() => {
    setNavbar(false);
    return () => {
      setNavbar(true);
    };
  });

  const login = {
    email: values.email,
    password: values.password,
    tipo: values.tipo,
  };

  const loguearse = async () => {
    await dispatch(authActions.login(login));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await loguearse();
    alert("logueado");
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <FormControl
            className={classes.form}
            fullwidth
            noValidate
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-label">¿Que sos?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.tipo}
              onChange={handleChange("tipo")}
              fullWidth
              label="¿Que Sos?"
            >
              <MenuItem value={1}>Vendedor</MenuItem>
              <MenuItem value={2}>Comprador</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.form} fullWidth>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={values.email}
              onChange={handleChange("email")}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              value={values.password}
              autoComplete="current-password"
              onChange={handleChange("password")}
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <Button
              fullWidth
              variant="contained"
              className={classes.submit}
              type="submit"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Has olvidado tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿No tienes un usuario? ¡Registrate!"}
                </Link>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default withRouter(Loguearse);
