import React from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";

function App(props) {
  return (
    <div className="App">
      <div>Conway's Game of Life</div>
      <GameGrid />
    </div>
  );
}

export default App;
