import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

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
      <h3>{category}</h3>
        <ol>
          {/* Images.map */}
          {
          (images || []).map(image => (
            <li>{image.title}</li>
          ))}
        </ol>
    </>
  );
}