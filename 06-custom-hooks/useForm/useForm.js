import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log({name, value});
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState( initialForm );
  }

  return {
    // Spread formState structure from FormWithCustomHook
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};
