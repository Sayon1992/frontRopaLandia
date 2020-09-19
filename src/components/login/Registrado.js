import { Container, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 400,
    width: 800,
    marginTop: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  titulo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
}));

const Registrado = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md" className={classes.container}>
        <Paper elevation={8} className={classes.paper}>
          <Typography className={classes.titulo}>
            Usted ha sido registrado correctamente!
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default withRouter(Registrado);
