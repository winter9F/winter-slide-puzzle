import { useState } from 'react'
import './App.css'
import "./components/Puzzle/Puzzle"
import { puzzlePieces } from './components/Puzzle/Puzzle'
import MoveTile from "./components/moveTile"

function App() {


  const tilesEdit = [...puzzlePieces]
  const solution = [...puzzlePieces]

  let puzzle = [];

  while (tilesEdit.length) {
    const indexNum = Math.floor(Math.random() * tilesEdit.length);
    puzzle.push(tilesEdit.splice(indexNum, 1)[0]);
  }

  const emptyTileIndex = puzzle.indexOf("tile9Blank");

  const isSolved = (puzzle, solution) => {
    return puzzle.every((puzzleValue, index) => puzzleValue === solution[index])
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

  const [puzzle1, setPuzzle] = useState()

  function handleTileClick(index) {
    if (canMoveTile(index)) {
      [puzzle[index], puzzle[emptyTileIndex]] = [puzzle[emptyTileIndex], puzzle[index]];
      setPuzzle([...puzzle])
    }
  }

  return (


    <section className='container'>
      <h1>Puzzle</h1>

      <div className="row d-flex text-center">
        <div className="card bg-dark d-inline">
          <button onClick={() => handleSwap()}><img id="0-0" className="m-2" src={puzzle[0]} alt="" /></button>
          <img id="0-1" className="m-2" src={puzzle[1]} alt="" />
          <img id="0-2" className="m-2" src={puzzle[2]} alt="" />
          <img id="1-0" className="m-2" src={puzzle[3]} alt="" />
          <img id="1-2" className="m-2" src={puzzle[4]} alt="" />
          <img id="1-3" className="m-2" src={puzzle[5]} alt="" />
          <img id="2-0" className="m-2" src={puzzle[6]} alt="" />
          <img id="2-1" className="m-2" src={puzzle[7]} alt="" />
          <img id="2-2" className="m-2" src={puzzle[8]} alt="" />
        </div>

      </div>

    </section>

  )
}
export default App
