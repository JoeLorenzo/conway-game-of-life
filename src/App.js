import React from "react";
// import "./App.css";
import GlobalStyles from "./theme/GlobalStyles";
import GameGrid from "./components/GameGrid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";
import Header from "./components/Header";
import About from "./components/About";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    maxWidth: "100%",
    background: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));

function App(props) {
  const classes = useStyles;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <div className="App">
        <Header />
        <Grid
          className={classes.pageContainer}
          container
          direction="column"
          justify="center"
          alignContent="center"
        >
          <Grid
            className={classes.gridContainer}
            container
            direction="column"
            justify="center"
            alignContent="center"
          >
            <GameGrid />
            <About />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
