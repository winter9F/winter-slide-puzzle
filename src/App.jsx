import { useState, useEffect } from 'react'
import './App.css'
import { CreatePuzzle } from './components/Puzzle/puzzle'
import { handleTileClick } from "./utils/TileClick"
import { handleShuffle } from "./utils/Shuffle"
import { canMoveTile } from "./utils/MoveTile";
import P1Complete from "./assets/PuzzlePieces1/P1-complete.jpg"
import P2Complete from "./assets/PuzzlePieces2/P2-complete.jpg"
import P3Complete from "./assets/PuzzlePieces3/P3-complete.jpg"




function App() {
  console.log(P1Complete)
  const [newPuzzle, setPuzzle] = useState([])
  const [solution, setSolution] = useState([])
  const [emptyTileIndex, setEmptyTileIndex] = useState((-1));
  const [isSolvedTrue, setIsSolved] = useState(false);
  const [isPuzzleVisible, setIsPuzzleVisible] = useState(false);


  useEffect(() => {
    const isSolved = (newPuzzle, solution) => {
      return newPuzzle.every((puzzleValue, index) => puzzleValue === solution[index])
    };
    if ((isSolved(newPuzzle, solution)) && (newPuzzle.length > 0)) {
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
            <>
              <menu className='homeBox'>
                <button className='imgHome' onClick={() => { CreatePuzzle("puzzle1", { setPuzzle, setSolution, setEmptyTileIndex }); setIsPuzzleVisible(!isPuzzleVisible) }}><img src={P1Complete} alt="" />
                </button>
                <button className='imgHome' onClick={() => { CreatePuzzle("puzzle2", { setPuzzle, setSolution, setEmptyTileIndex }); setIsPuzzleVisible(!isPuzzleVisible) }}><img src={P2Complete} alt="" />
                </button>
                <button className='imgHome' onClick={() => { CreatePuzzle("puzzle3", { setPuzzle, setSolution, setEmptyTileIndex }); setIsPuzzleVisible(!isPuzzleVisible) }}><img src={P3Complete} alt="" /></button>
              </menu>
            </>
          ) : (
            <>
              <button className='nav' onClick={() => handleShuffle({ newPuzzle, setPuzzle, setEmptyTileIndex })}>Shuffle</button>
              <button className='nav' onClick={() => setIsPuzzleVisible(!isPuzzleVisible)}>Pick new Puzzle</button>
            </>
          )}
        </menu>
      </div>



    </section >
  )
}



export default App
