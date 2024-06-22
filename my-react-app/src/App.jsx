import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css'

function App() {
  // Hook de useForm para manejar el formulario y sus errores
  const { register, handleSubmit, formState: { errors } } = useForm();
  // Estado para controlar si el formulario ha sido enviado exitosamente
  const [submitted, setSubmitted] = useState(false);

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    console.log(data); // Mostrar datos en consola
    setSubmitted(true); // Marcar el formulario como enviado
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App