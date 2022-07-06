import React from "react";
import { useState } from "react";

export default function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState();

  // const onInputChange = {(event)} => {
  //     console.log(event.target.value);
  //     setInputValue( event.target.value );
  // }

  // Podemos utilizar desestructuracion

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  //   const onSubmit = (event) => {
  //     event.preventDefault();
  //     if( inputValue.trim().length <= 0) return;
  //     // console.log(inputValue);
  //     setCategories(categories => [...categories, inputValue]);
  //     setInputValue('');
  //   }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 0) return;
    // console.log(inputValue);
    // setCategories((categories) => [...categories, inputValue]);
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        //{inputValue || ''} se utiliza para evitar el warning: uncontrolled intput to be
        value={inputValue || ''}
        // Opcion 1
        // onChange={(event) => onInputChange(event)}
        // Opcion 2
        onChange={onInputChange}
      />
    </form>
  );
}