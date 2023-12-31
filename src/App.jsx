import { useState, useEffect } from 'react'
import './App.css'
import { CreatePuzzle } from './utils/Puzzle/puzzle'
import { handleTileClick } from "./utils/tileClick"
import { handleShuffle } from "./utils/shuffle"
import { canMoveTile } from "./utils/moveTile";
import P1Complete from "./assets/PuzzlePieces1/P1-complete.jpg"
import P2Complete from "./assets/PuzzlePieces2/P2-complete.jpg"
import P3Complete from "./assets/PuzzlePieces3/P3-complete.jpg"




function App() {
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
        <div className=''>
          <h1 className='title'>Winter's Puzzles</h1>
        </div>
        {!isPuzzleVisible ? (
          <>
            <div className='puzzleBox'>
              <div className='pickText'>
                <h2>Pick a Puzzle</h2>
              </div>
              <menu className='puzzleSelect'>
                <button className='imgHome' onClick={() => { CreatePuzzle("puzzle1", { setPuzzle, setSolution, setEmptyTileIndex }); setIsPuzzleVisible(!isPuzzleVisible) }}><img src={P1Complete} alt="" />
                </button>
                <button className='imgHome' onClick={() => { CreatePuzzle("puzzle2", { setPuzzle, setSolution, setEmptyTileIndex }); setIsPuzzleVisible(!isPuzzleVisible) }}><img src={P2Complete} alt="" />
                </button>
                <button className='imgHome' onClick={() => { CreatePuzzle("puzzle3", { setPuzzle, setSolution, setEmptyTileIndex }); setIsPuzzleVisible(!isPuzzleVisible) }}><img src={P3Complete} alt="" /></button>
              </menu>
            </div>
          </>


        ) : null}


        {isSolvedTrue && isPuzzleVisible ? (
          <div className='puzzleBox'>
            <div className='successBox'>
              <h1 className='successMessage'>WELL DONE!</h1>
              <button className='nav' onClick={() => { setIsPuzzleVisible(!isPuzzleVisible); setIsSolved(false) }}>Pick new Puzzle</button>
            </div>
          </div>
        ) : isPuzzleVisible && newPuzzle && (
          <div className='puzzleBox'>
            {newPuzzle.map((tile, index) =>
              <button
                key={index}
                className="tile tile-button"
                onClick={() => handleTileClick({ index, newPuzzle, emptyTileIndex, setPuzzle, setEmptyTileIndex, canMoveTile })}
              ><img src={tile} alt="" /></button>
            )}
          </div>

        )
        }
        {!isSolvedTrue && isPuzzleVisible && newPuzzle ? (
          < menu >
            <button className='nav' onClick={() => handleShuffle({ newPuzzle, setPuzzle, setEmptyTileIndex })}>Shuffle</button>
            <button className='nav' onClick={() => setIsPuzzleVisible(!isPuzzleVisible)}>Pick new Puzzle</button>
          </menu>
        ) : null}
      </div>



    </section >
  )
}



export default App
