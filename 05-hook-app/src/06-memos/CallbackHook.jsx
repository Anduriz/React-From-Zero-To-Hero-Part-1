import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // Sirve para memorizar funciones
    // La funcion se va a dibujar una unica vez
    const incrementFather = useCallback(
      (value) => {
        setCounter( (x) => x + value);
      },
      [],
    )
  
    // useEffect(() => {
    //   // incrementFather();
    // }, [incrementFather])
      
    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }

  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
