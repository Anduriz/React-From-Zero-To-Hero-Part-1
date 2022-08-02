import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  // Obtener la navegacion
  const navigate = useNavigate();
  // Obtener informacion de la ubicacion donde nos encontramos
  const location = useLocation();
  // console.log({location});
  // Obtener los query parameters
  // const query = queryString.parse(location.search);
  const { q = '' } = queryString.parse(location.search);
  // console.log(query);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0 ) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if(searchText.trim().length <=1 ) return;
    // console.log({searchText});
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="" onSubmit={onSearchSubmit}>
            <input type="text" 
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}/>
            <button className="btn btn-outline-primary mt-3">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* Opcion 1 para ocultar componentes */}
          {/* { q === '' ? 
            <div className="alert alert-primary">
              Search a hero
            </div> : 
            ( heroes.length === 0 ) &&  
            <div className="alert alert-danger">
              There's no heroes with <b>{ q }</b>
            </div>
           } */}

            {/* Opcion 2 para ocultar componentes */}
            <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>
              Search a hero
            </div>
   
            <div className="alert alert-danger animate__animated animate__fadeIn"  style={{display: showError ? '' : 'none'}}>
              There's no heroes with <b>{ q }</b>
            </div>

          
          {heroes.map( hero => (
            <HeroCard key={hero.id} {...hero}/>
          ))}
        </div>
      </div>
    </>
  );
};
