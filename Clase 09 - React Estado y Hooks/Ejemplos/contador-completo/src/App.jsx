import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // useEffect 1: Actualizar el título del documento
  useEffect(() => {
    document.title = `Contador: ${count}`
  }, [count])

  // useEffect 2: Guardar el contador en localStorage
  useEffect(() => {
    localStorage.setItem('contador', count)
    console.log('Guardado en localStorage:', count)
  }, [count])

  // useEffect 3: Cargar el contador desde localStorage al montar
  useEffect(() => {
    const savedCount = localStorage.getItem('contador')
    if (savedCount) {
      setCount(Number(savedCount))
      console.log('Contador restaurado:', savedCount)
    }
  }, [])

  const incrementar = () => setCount(count + 1)
  const decrementar = () => setCount(count - 1)
  const resetear = () => setCount(0)

  return (
    <div className="app">
      <div className="container">
        <h1>Contador</h1>
        
        <div className="contador-display">
          {count}
        </div>

        <div className="botones">
          <button onClick={decrementar} className="btn">-</button>
          <button onClick={resetear} className="btn">Reset</button>
          <button onClick={incrementar} className="btn">+</button>
        </div>
      </div>
    </div>
  )
}

export default App
