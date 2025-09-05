//import { useState } from 'react'
import './App.css'

function App() {
  /* const [count, setCount] = useState(0)

  const increment = () => setCount((count) => (count >= 22 ? 0 : count + 1));
  const decrement = () => setCount((count) => count == 0 ? 0 : count - 1); */

  return (
    <>
      {/* <div className="root">
        <h1>count is {count}</h1>
        <p>value update only 0-22</p>
        <button className="btn" onClick={increment}>
          increment
        </button>
        <button className="btn" onClick={decrement}>
          decrement
        </button>
      </div> */}
      <div className="smile">
        <h1>😊</h1>
        <div className="face">
          <div className="eye left"></div>
          <div className="eye right"></div>
          <div className="mouth"></div>
        </div>
      </div>
    </>
  );
}

export default App
