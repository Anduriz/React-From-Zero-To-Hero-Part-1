import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export default function GifGrid({ category }) {

    useEffect( () => {
        getGifs(category);
    },[  ])

  return (
    <>
      <h3>{category}</h3>
    </>
  );
} 