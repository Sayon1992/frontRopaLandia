import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const ColorPallette = (props) => {
  const useStyles = makeStyles((theme) => ({
    color: {
      height: 10,
      width: 10,
      borderRadius: "100%",
      backgroundColor: props.color,
      marginTop: 3,
    },
  }));
  const classes = useStyles();
  return <div className={classes.color}></div>;
};

export default ColorPallette;
