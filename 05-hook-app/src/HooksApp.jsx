import React from "react";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { CounterApp } from "./01-useState/CounterApp";

export const HooksApp = () => {
  return (
    <>
      <h3>Hooks App</h3>
      {/* <CounterApp /> */}
      <CounterWithCustomHook />
    </>
  );
};
