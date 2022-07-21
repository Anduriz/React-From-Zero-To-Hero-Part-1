import { useCounter, useFetch } from "../hooks";
import LoadingQuote from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {

const { counter, increment, decrement, reset } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  // Se podria hacer de esta manera, pero existen mejores practicas
  // if ( isLoading ) {
  //     return (<h1>Loading...</h1>)
  // }

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <br />

      {/* Utilizalo si tienes pocas lineas de codigo para que sea facil de leer */}
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote author={author} quote={quote} />
      )}
        <button onClick={increment} disabled={isLoading} className="btn btn-primary">Next quote</button>
    </>
  );
};
