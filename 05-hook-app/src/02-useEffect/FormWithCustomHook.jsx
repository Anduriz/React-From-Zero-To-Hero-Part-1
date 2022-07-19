import { useEffect } from "react";
import { useState } from "react";

export const FormWithCustomHook = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log({name, value});
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, []);

  //   useEffect(() => {
  //     console.log("formState changed");
  //   }, [formState]);

  //   useEffect(() => {
  //     console.log("email changed");
  //   }, [email]);

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="e-mail"
        name="email"
        value={email}
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
    </>
  );
};
