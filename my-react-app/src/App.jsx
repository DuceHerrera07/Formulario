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
    <div className='App'>
        <header>Formulario de Contacto</header>
        <form onSubmit={handleSubmit(onSubmit)}>

           {/* Campo para el nombre */}
          <div>
          <label htmlFor="fullName">Nombre Completo: </label>
          <input id="fullName" {...register('fullName', { required: true })} />
          {errors.fullName && <span className="error">El nombre completo es obligatorio</span>}
          </div>

          {/* Campo para el correo electrónico */}
          <div>
            <label htmlFor="email">Correo Electrónico</label>
            <input id="email" type="email" {...register('email', { required: true })} />
            {errors.email && <span className="error">El correo electrónico es requerido</span>}
         </div>

        </form>
    </div>
  )
}

export default App