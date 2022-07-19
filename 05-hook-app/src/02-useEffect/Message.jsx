import { useEffect } from "react";

export const Message = () => {
  //   useEffect(() => {
  //     // Callout
  //     console.log("Message Mounted");

  //     // Cleanup
  //     return () => {
  //       console.log("Message Unmounted");
  //     };

  //     // Arreglo de dependencias
  //   }, []);

  useEffect(() => {
    // Callout
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };

    window.addEventListener("mousemove", onMouseMove);
    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
    // Arreglo de dependencias
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
