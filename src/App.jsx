import { useState } from 'react'
import tile1 from "./assets/PuzzlePieces/P1-1.jpg"
import Puzzle from "./components/Puzzle/Puzzle"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='container'>
        <h1>Puzzle</h1>
        <Puzzle />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </section>
    </>
  )
}
export default App
