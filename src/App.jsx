import { useState } from 'react'
import './App.css'
import "./components/Puzzle/Puzzle"
import { puzzle, solution } from './components/Puzzle/Puzzle'
import MoveTile from "./components/moveTile"

function App() {
  const [count, setCount] = useState(0)

  const [selectedTile, setSelectedTile] = useState();

  function handleClick(img) {
    setSelectedTile(img);
  }

  return (

    <section className='container'>
      <h1>Puzzle</h1>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <div className="row d-flex text-center">
        <div className="card bg-dark d-inline">
          <button clickEvent={handleClick}><img id="0-0" className="m-2" src={puzzle[0]} alt="" /></button>
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
