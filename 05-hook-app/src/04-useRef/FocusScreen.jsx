import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <br />

      <input
        ref={inputRef}
        type="text"
        placeholder="Name"
        className="form-control"
      />

      <button onClick={onClick} className="btn btn-primary mt-2">
        Set focus
      </button>
    </>
  );
};
