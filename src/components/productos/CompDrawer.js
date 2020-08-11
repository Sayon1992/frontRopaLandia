import React, { useState } from "react";
import {
  Drawer,
  Card,
  CardMedia,
  List,
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    backgroundColor: "#f4f3f3",
    marginTop: 125,
  },
  cardRoot: {
    marginTop: "1rem",
    maxWidth: 280,
    justifyContent: "center",
    alignSelf: "center",
  },
  media: {
    height: 140,
    width: 280,
  },
  tituloArticulos: {
    fontFamily: "Roboto",
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1rem",
  },
  list: {
    marginTop: "1rem",
  },
  tituloCategorias: {
    marginLeft: "1rem",
    marginTop: "3rem",
  },
  listRoot: {
    marginTop: 0,
  },
}));

const CompDrawer = ({ articulos }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState([0]);

  const articulosDrawer = articulos;

  const handleChecks = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.root,
      }}
      anchor="left"
      elevation={1}
      open={true}
    >
      <Card className={classes.cardRoot}>
        <CardMedia
          className={classes.media}
          image="https://s3-us-west-2.amazonaws.com/lasaga-blog/media/images/grupo_imagen.original.jpg"
        />
      </Card>

      <Typography className={classes.tituloCategorias} variant="h5">
        Categorias
      </Typography>

      <List className={classes.list} classes={{ root: classes.listRoot }}>
        {articulosDrawer.map((item, index) => {
          let itemValor = item[0][`${Object.keys(item[0])}`];
          let itemNombre = Object.keys(item[0]);
          const labelId = `checkbox-list-secondary-label-${item[0]}`;
          return (
            <ListItem
              key={itemNombre}
              role={undefined}
              dense
              button
              onClick={handleChecks(item)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(item) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${Object.keys(item[0])}`} />
              <ListItemText>{`(${itemValor.length})`}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default CompDrawer;
