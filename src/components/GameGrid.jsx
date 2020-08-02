import React, { useState, useCallback, useRef } from "react";
import "../App.css";
const numRows = 40;
const numColumns = 40;

// #1st step is to create an empty 2D array with desired length

// this helper function creates an empty array given the number of
// columns and rows as parameters
const createEmpty2DArray = (numColumns, numRows) => {
  const empty2DArray = new Array(numColumns);
  for (let x = 0; x < numColumns; x++) {
    empty2DArray[x] = new Array(numRows);
  }
  return empty2DArray;
};

// helper function for array column length
const columnLength = (array) => {
  return array.length;
};
// helper function for array row length
const rowLength = (array) => {
  return array[0].length;
};

// #2nd step is to fill the empty array with dead cells
// or a defualt value

// this helper function will populate the empty array
// with false values to indicate dead cells
const fillEmpty2DArray = (array) => {
  for (let x = 0; x < columnLength(array); x++) {
    for (let y = 0; y < rowLength(array); y++) {
      array[x][y] = false;
    }
  }
  return array;
};

// #3rd step is to make a copy of the current grid so the current
// grid is not mutated

// helper function to clone a grid
const cloneGrid = (grid) => {
  let clone = createEmpty2DArray(columnLength(grid), rowLength(grid));
  for (let x = 0; x < columnLength(grid); x++) {
    for (let y = 0; y < rowLength(grid); y++) {
      clone[x][y] = grid[x][y];
    }
  }
  return clone;
};

// helper function for checking if cell neighbor
// is out of bounds
const outOfBound = (grid, x, y) => {
  if (x >= 0 && x < columnLength(grid) && y >= 0 && y < rowLength(grid)) {
    return false;
  } else {
    return true;
  }
};

const gameLogic = (grid) => {
  const gridCopy = cloneGrid(grid);
  for (let x = 0; x < columnLength(grid); x++) {
    for (let y = 0; y < rowLength(grid); y++) {
      let neighbors = 0;
      // check north west cell
      if (outOfBound(grid, x - 1, y - 1) === false) {
        if (grid[x - 1][y - 1] === true) {
          neighbors += 1;
        }
      }
      // check north cell
      if (outOfBound(grid, x, y - 1) === false) {
        if (grid[x][y - 1] === true) {
          neighbors += 1;
        }
      }
      // check north east cell
      if (outOfBound(grid, x + 1, y - 1) === false) {
        if (grid[x + 1][y - 1] === true) {
          neighbors += 1;
        }
      }
      // check west cell
      if (outOfBound(grid, x - 1, y) === false) {
        if (grid[x - 1][y] === true) {
          neighbors += 1;
        }
      }
      // check east cell
      if (outOfBound(grid, x + 1, y) === false) {
        if (grid[x + 1][y] === true) {
          neighbors += 1;
        }
      }
      // check south west cell
      if (outOfBound(grid, x - 1, y + 1) === false) {
        if (grid[x - 1][y + 1] === true) {
          neighbors += 1;
        }
      }
      // check south cell
      if (outOfBound(grid, x, y + 1) === false) {
        if (grid[x][y + 1] === true) {
          neighbors += 1;
        }
      }
      // check south east cell
      if (outOfBound(grid, x + 1, y + 1) === false) {
        if (grid[x + 1][y + 1] === true) {
          neighbors += 1;
        }
      }
      if (neighbors === 3) {
      }
      if (neighbors < 2 || neighbors > 3) {
        gridCopy[x][y] = false;
      } else if (grid[x][y] === false && neighbors === 3) {
        gridCopy[x][y] = true;
      }
    }
  }
  return gridCopy;
};

function GameGrid(props) {
  const [playing, setPlaying] = useState(false);
  const [grid, setGrid] = useState(() => {
    // this will first create an empty 2D array using a helper function
    // next it will fill the empty array with false boleans using
    // another helper function
    return fillEmpty2DArray(createEmpty2DArray(numColumns, numRows));
  });

  const playingRef = useRef();
  playingRef.current = playing;
  const nextGeneration = useCallback(() => {
    // a recursive function that runs the simulation
    if (!playingRef.current) {
      return;
    }

    setGrid((grid) => {
      return gameLogic(grid);
    });
    setTimeout(nextGeneration, 100);
  }, []);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numColumns}, 20px)`,
        }}
      >
        {grid.map((column, x) =>
          column.map((row, y) => (
            <div
              key={`${x}-${y}`}
              onClick={() => {
                // make a copy of the current grid to not directly
                // mutate the current grid
                const gridCopy = cloneGrid(grid);
                gridCopy[x][y] = grid[x][y] ? false : true;
                setGrid(gridCopy);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[x][y] ? "#CCCC00" : "black",
                border: "solid 1px gray",
              }}
            />
          ))
        )}
      </div>
      <button
        onClick={() => {
          setPlaying(!playing);
          if (!playing) {
            playingRef.current = true;
            nextGeneration();
          }
        }}
      >
        {playing ? "stop" : "start"}
      </button>
      <button
        onClick={() => {
          setPlaying(false);
          setGrid(fillEmpty2DArray(createEmpty2DArray(numColumns, numRows)));
        }}
      >
        reset
      </button>
    </>
  );
}

export default GameGrid;
