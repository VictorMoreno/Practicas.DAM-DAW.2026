import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  const resetear = () => {
    setCount(0)
  }

  return (
    <div className="app">
      <h1>Contador en React</h1>
      <div className="contador">
        <h2>{count}</h2>
      </div>
      <div className="botones">
        <button onClick={decrementar}>-</button>
        <button onClick={resetear}>Resetear</button>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  )
}

export default App
