import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './aplicacion.css';

export default function aplicacion() {
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
    <div>aplicacion</div>
  )
}