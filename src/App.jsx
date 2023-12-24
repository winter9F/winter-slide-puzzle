import { useState } from 'react'
import './App.css'
import "./components/Puzzle/Puzzle"
import { puzzlePieces } from './components/Puzzle/Puzzle'
import MoveTile from "./components/moveTile"

function App() {


  const tilesEdit = [...puzzlePieces]
  const solution = [...puzzlePieces]

  let puzzle = [];
  const [puzzleEdit, setPuzzle] = useState([...puzzle])

  while (tilesEdit.length) {
    const indexNum = Math.floor(Math.random() * tilesEdit.length);
    puzzle.push(tilesEdit.splice(indexNum, 1)[0]);
  }

  const emptyTileIndex = puzzle.indexOf("tile9Blank");

  const isSolved = (puzzle, solution) => {
    return puzzle.every((puzzleValue, index) => puzzleValue === solution[index])
  }

  function handleTileClick(index) {
    if (canMoveTile(index)) {
      [puzzle[index], puzzle[emptyTileIndex]] = [puzzle[emptyTileIndex], puzzle[index]];
      setPuzzle([...puzzle])
    }
  }


  const canMoveTile = (index) => {
    const emptyRowIndex = Math.floor(emptyTileIndex / 3);
    const emptyColIndex = emptyTileIndex % 3;
    const clickedRowIndex = Math.floor(index / 3);
    const clickedColIndex = index % 3;

    const isAdjacent =
      (emptyRowIndex === clickedRowIndex && Math.abs(emptyColIndex - clickedColIndex) === 1) ||
      (emptyColIndex === clickedColIndex && Math.abs(emptyRowIndex - clickedRowIndex) === 1)

    return isAdjacent;
  }





  return (


    <section className='container'>
      <h1>Puzzle</h1>

      <div className="row d-flex text-center">
        <div className="card bg-dark d-inline">
          {puzzle.map((tile, index) =>
            <button
              key={index}
              className="tile"
              onClick={() => handleTileClick(index)}
            ><img src={tile} alt="" /></button>
          )}
        </div>

      </div>
    </section>
  )
}



export default App
