import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //This will give the navigation bar some extra padding bellow it.
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = (props) => {
  //material ui hooks
  const classes = useStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Toolbar disableGutters>
          <Grid container justify="center">
            <Typography variant="h1">Conway's Game of Life</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
