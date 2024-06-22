import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="App dark-theme">
      <header className="dark-header">Formulario de Contacto</header>
      <form className="dark-form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label htmlFor="fullName" className="dark-label">Nombre Completo:</label>
          <input id="fullName" className="dark-input" {...register('fullName', { required: true })} />
          {errors.fullName && <span className="dark-error">El nombre completo es obligatorio</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="dark-label">Correo Electrónico:</label>
          <input id="email" className="dark-input" type="email" {...register('email', { required: true })} />
          {errors.email && <span className="dark-error">El correo electrónico es obligatorio</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="dark-label">Asunto:</label>
          <input id="subject" className="dark-input" {...register('subject', { required: true })} />
          {errors.subject && <span className="dark-error">El asunto es obligatorio</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="dark-label">Mensaje:</label>
          <textarea id="message" className="dark-textarea" {...register('message', { required: true })}></textarea>
          {errors.message && <span className="dark-error">El mensaje es obligatorio</span>}
        </div>

        <button type="submit" className="dark-button">Enviar</button>
      </form>

      {submitted && <div className="dark-success">¡El mensaje se envió con éxito!</div>}
    </div>
  );
}

export default App;