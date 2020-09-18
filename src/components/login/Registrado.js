import { Container, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 400,
    width: 800,
    marginTop: 125,
  },
}));

const Registrado = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Paper elevation={8} className={classes.paper}>
          holis
        </Paper>
      </Container>
    </div>
  );
};

export default withRouter(Registrado);
