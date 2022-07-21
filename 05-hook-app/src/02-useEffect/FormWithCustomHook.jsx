import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { formState, onInputChange,  onResetForm, username, email, password } = useForm ({
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password } = formState;
 
  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <br />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="e-mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contrasena"
        name="password"
        value={password}
        onChange={onInputChange}
      />

    <button onClick={ onResetForm } className='btn btn-warning mt-2'> Reset </button>

    </>
  );
};
