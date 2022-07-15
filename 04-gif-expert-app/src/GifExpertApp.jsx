import { useState } from "react";

// Importacion por medio de index
import { AddCategory, GifGrid } from './components';

// Importacion antes de index
// import AddCategory from "./components/AddCategory";
// import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Nintendo"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    console.log(newCategory);

    // Vamos a evitar usar push porque push muta un objeto y react trata de no hacer mutaciones en el estado
    // categories.push(newCategory);

    // Opcion 1: Inserta al final
    setCategories([...categories, newCategory]);

    // Opcion 2: Inserta al final
    // setCategories( cat => [...cat, 'Microsoft' ]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* Podemos enviar propiedades o props a nuestros componentes */}
      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={onAddCategory}
      />

      {/* Listado de Items / Gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {/* Renderizar listado basado en las categorias */}
        {
        categories.map(( category ) => (
            <GifGrid key={category} category={category}/>
        ))
        }

      {/* Item / Gif */}
    </>
  );
};