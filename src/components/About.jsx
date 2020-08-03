import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({}));

const About = (props) => {
  const classes = useStyles();

  return (
    <Grid item component="main" className="item-container">
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        spacing={3}
      >
        <Grid item lg={8}>
          <Typography variant="h1">About Conway's Game of Life</Typography>
          <Typography variant="body1" component="p" className="about">
            Conway’s Game of life was developed by the English mathematician
            John Conway in 1970. It is a type of mathematical model known as a
            cellular automata. The game consists of a grid and each cell will
            either turn on (live) or turn off (die) given a few simple rules.
          </Typography>
          <Typography variant="h1">The Rules</Typography>
          <Typography variant="body1" component="p" className="about">
            <ul>
              <li>
                Given a current cell in coordinate x,y, if a live cell has less
                than 2 adjacent live cells (referred to as its neighbors) then
                the next generation of the current cell will die, as by
                underpopulation
              </li>
              <li>
                Given a current cell in coordinate x,y, if a live cell has more
                than 3 live neighbors then the next generation of the current
                cell will die, as by overcrowding.
              </li>
              <li>
                Given a current cell in coordinate x,y, if a live cell has 2 or
                3 live neighbors then the next generation of the current cell
                will continue to live.
              </li>
              <li>
                Given a current cell in coordinate x,y, if a dead cell has 3
                live neighbors then the next generation of the current cell will
                live, as by reproduction.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default About;
