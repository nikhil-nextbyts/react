import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
/* 
  const xexo = () => {
    setCount((count) => count + 1)
  } */

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App
