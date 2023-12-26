import { useState, useEffect } from 'react'
import './App.css'
import "./components/Puzzle/puzzlePieces"
import { puzzle, solution, emptyTileIndex } from './components/Puzzle/puzzle'
import MoveTile from "./components/moveTile"

function App() {




  const [newPuzzle, setPuzzle] = useState([...puzzle])
  const [emptyTileIndex, setEmptyTileIndex] = useState(() => puzzle.indexOf("/src/assets/PuzzlePieces/P1-9-blank.jpg"));
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


  function handleTileClick(index) {
    if (canMoveTile(index)) {
      const updatedPuzzle = [...newPuzzle];
      [updatedPuzzle[index], updatedPuzzle[emptyTileIndex]] = [updatedPuzzle[emptyTileIndex], updatedPuzzle[index]];
      let newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces/P1-9-blank.jpg");
      setPuzzle(updatedPuzzle);
      setEmptyTileIndex(newEmptyTileIndex);


    }
  }

  function handleShuffle(currentPuzzle) {
    currentPuzzle = [...currentPuzzle];
    let updatedPuzzle = [];

    while (currentPuzzle.length) {
      const indexNum = Math.floor(Math.random() * currentPuzzle.length);
      updatedPuzzle.push(currentPuzzle.splice(indexNum, 1)[0]);
    };
    let newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces/P1-9-blank.jpg");
    setPuzzle(updatedPuzzle);
    setEmptyTileIndex(newEmptyTileIndex);
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
      <div className='content'>
        <div>
          <h1>Puzzle</h1>
        </div>
        <div className="puzzleBox">
          {isSolvedTrue ? (
            <button>YOU WIN</button>
          ) : isPuzzleVisible && (
            newPuzzle.map((tile, index) =>
              <div>
                <button
                  key={index}
                  className="tile tile-button"
                  onClick={() => handleTileClick(index)}
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
              <button className='nav' onClick={() => handleShuffle(newPuzzle)}>Shuffle</button>
              <button className='nav'>Pick new Puzzle</button>
            </>
          )}
        </menu>
      </div>



    </section >
  )
}



export default App
