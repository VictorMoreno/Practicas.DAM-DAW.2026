import { useState } from 'react'
import './App.css'

function App() {
  // Estados para cada input
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [pais, setPais] = useState("españa")
  const [aceptaTerminos, setAceptaTerminos] = useState(false)
  const [genero, setGenero] = useState("")

  return (
    <div className="container">
      <h1>Inputs Controlados en React</h1>
      <p className="subtitle">Ejemplos de componentes controlados con estado</p>

      {/* 1. Input de texto básico */}
      <div className="ejemplo">
        <h2>1. Input de Texto</h2>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p className="resultado">Hola <strong>{nombre || "..."}</strong></p>
        <code>onChange={(e) => setNombre(e.target.value)}</code>
      </div>

      {/* 2. Input de email */}
      <div className="ejemplo">
        <h2>2. Input de Email</h2>
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="resultado">Email: <strong>{email || "..."}</strong></p>
      </div>

      {/* 3. Textarea */}
      <div className="ejemplo">
        <h2>3. Textarea</h2>
        <textarea
          placeholder="Escribe tu mensaje aquí..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows="4"
        />
        <p className="resultado">
          Caracteres: <strong>{mensaje.length}</strong>
        </p>
      </div>

      {/* 4. Select */}
      <div className="ejemplo">
        <h2>4. Select (Desplegable)</h2>
        <select value={pais} onChange={(e) => setPais(e.target.value)}>
          <option value="españa">España</option>
          <option value="mexico">México</option>
          <option value="argentina">Argentina</option>
          <option value="colombia">Colombia</option>
        </select>
        <p className="resultado">País seleccionado: <strong>{pais}</strong></p>
      </div>

      {/* 5. Checkbox */}
      <div className="ejemplo">
        <h2>5. Checkbox</h2>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
          />
          Acepto los términos y condiciones
        </label>
        <p className="resultado">
          Estado: <strong>{aceptaTerminos ? "✓ Aceptado" : "✗ No aceptado"}</strong>
        </p>
        <code>onChange={(e) => setAceptaTerminos(e.target.checked)}</code>
      </div>

      {/* 6. Radio buttons */}
      <div className="ejemplo">
        <h2>6. Radio Buttons</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="genero"
              value="masculino"
              checked={genero === "masculino"}
              onChange={(e) => setGenero(e.target.value)}
            />
            Masculino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="femenino"
              checked={genero === "femenino"}
              onChange={(e) => setGenero(e.target.value)}
            />
            Femenino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="otro"
              checked={genero === "otro"}
              onChange={(e) => setGenero(e.target.value)}
            />
            Otro
          </label>
        </div>
        <p className="resultado">Género: <strong>{genero || "No seleccionado"}</strong></p>
      </div>

      {/* Resumen de todos los valores */}
      <div className="resumen">
        <h2>📋 Resumen del Formulario</h2>
        <ul>
          <li><strong>Nombre:</strong> {nombre || "(vacío)"}</li>
          <li><strong>Email:</strong> {email || "(vacío)"}</li>
          <li><strong>Mensaje:</strong> {mensaje.length > 0 ? `${mensaje.substring(0, 50)}...` : "(vacío)"}</li>
          <li><strong>País:</strong> {pais}</li>
          <li><strong>Términos:</strong> {aceptaTerminos ? "Aceptado" : "No aceptado"}</li>
          <li><strong>Género:</strong> {genero || "No seleccionado"}</li>
        </ul>
      </div>
    </div>
  )
}

export default App
