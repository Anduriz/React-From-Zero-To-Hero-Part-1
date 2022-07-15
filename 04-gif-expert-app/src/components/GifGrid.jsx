//Importaciones de react
import { useEffect, useState } from "react";
//Importaciones de terceros

//Nuestro codigo
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export default function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  // console.log({images, isLoading});

  // const [images, setImages] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  // const getImages = async() => {
  //   const newImages = await getGifs( category );
  //   setImages(newImages);
  //   isLoading(newImages);
  // }

  // useEffect( () => {
  //     getImages();
  // },[])

  //   useEffect( () => {
  //     getGifs(category)
  //       .then( newImages => setImages(newImages))
  // },[ ])

  return (
    <>
      <h3>{category}</h3>
      {
        // if isLoading === true
        isLoading && <h2>Cargando...</h2>
      }
      <div className="card-grid">
        {/* Images.map */}
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}
