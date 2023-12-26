import { useState, useEffect } from 'react'
import './App.css'
import "./components/Puzzle/puzzlePieces"
import { puzzle, solution, emptyTileIndex } from './components/Puzzle/puzzle'
import MoveTile from "./components/moveTile"

function App() {




  const [newPuzzle, setPuzzle] = useState([...puzzle])
  const [emptyTileIndex, setEmptyTileIndex] = useState(() => puzzle.indexOf("/src/assets/PuzzlePieces/P1-9-blank.jpg"));
  const [isSolvedTrue, setIsSolved] = useState(false);

  useEffect(() => {
    const isSolved = (newPuzzle, solution) => {
      return newPuzzle.every((puzzleValue, index) => puzzleValue === solution[index])
    };
    if (isSolved(newPuzzle, solution)) {
      setIsSolved(true);
    }
  }, [newPuzzle])


  function handleTileClick(index) {
    if (canMoveTile(index)) {
      const updatedPuzzle = [...newPuzzle];
      [updatedPuzzle[index], updatedPuzzle[emptyTileIndex]] = [updatedPuzzle[emptyTileIndex], updatedPuzzle[index]];
      let newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces/P1-9-blank.jpg");
      setPuzzle(updatedPuzzle);
      setEmptyTileIndex(newEmptyTileIndex);


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

      <div className="puzzleBox">
        <div className="">

        </div>
        {isSolvedTrue ? (
          <button>YOU WIN</button>
        ) : (
          newPuzzle.map((tile, index) =>
            <button
              key={index}
              className="tile"
              onClick={() => handleTileClick(index)}
            ><img src={tile} alt="" /></button>
          )
        )}

      </div>



    </section >
  )
}



export default App
