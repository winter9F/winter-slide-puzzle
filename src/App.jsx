import { useState, useEffect } from 'react'
import './App.css'
import "./components/Puzzle/puzzlePieces"
import { puzzle, solution, emptyTileIndex } from './components/Puzzle/puzzle'
import { handleTileClick } from "./utils/TileClick"
import { handleShuffle } from "./utils/Shuffle"
import { canMoveTile } from "./utils/MoveTile";



function App() {

  const [newPuzzle, setPuzzle] = useState([...puzzle])
  const [emptyTileIndex, setEmptyTileIndex] = useState(() => puzzle.indexOf("/src/assets/PuzzlePieces1/P1-9-blank.jpg"));
  const [isSolvedTrue, setIsSolved] = useState(false);
  const [isPuzzleVisible, setIsPuzzleVisible] = useState(false);


  useEffect(() => {
    const isSolved = (newPuzzle, solution) => {
      return newPuzzle.every((puzzleValue, index) => puzzleValue === solution[index])
    };
    if (isSolved(newPuzzle, solution)) {
      setIsSolved(true);
    }
  }, [newPuzzle])


  return (


    <section className='container'>
      <div className='content'>
        <div>
          <h1>Puzzle</h1>
        </div>
        <div className="puzzleBox">
          {isSolvedTrue ? (
            <button>YOU WIN</button>
          ) : isPuzzleVisible && newPuzzle && (
            newPuzzle.map((tile, index) =>
              <div>
                <button
                  key={index}
                  className="tile tile-button"
                  onClick={() => handleTileClick({ index, newPuzzle, emptyTileIndex, setPuzzle, setEmptyTileIndex, canMoveTile })}
                ><img src={tile} alt="" /></button>
              </div>
            )
          )}
        </div>
        <menu>

          {!isPuzzleVisible ? (
            <button className='nav' onClick={() => setIsPuzzleVisible(!isPuzzleVisible)}> Puzzle 1
            </button>
          ) : (
            <>
              <button className='nav' onClick={() => handleShuffle({ newPuzzle, setPuzzle, setEmptyTileIndex })}>Shuffle</button>
              <button className='nav'>Pick new Puzzle</button>
            </>
          )}
        </menu>
      </div>



    </section >
  )
}



export default App
