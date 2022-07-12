//Importaciones de react
import { useEffect, useState } from "react";
//Importaciones de terceros

//Nuestro codigo
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export default function GifGrid({ category }) {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  useEffect( () => {
      getImages();
  },[])

  //   useEffect( () => {
  //     getGifs(category)
  //       .then( newImages => setImages(newImages))
  // },[ ])

  return (
    <>
      <h3>{ category }</h3>
        <div className="card-grid">
          {/* Images.map */}
          { images.map( image => ( <GifItem 
            key={image.id} 
            { ...image }
            /> )) }
        </div>
    </>
  );
}