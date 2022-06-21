import React from 'react'
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router';
import { HeroCard } from '../hero/HeroCard';
import { useForm } from '../hooks/useForm'
import getHeroesByName from '../selectors/getHeroesByName';

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName(q);

  const handleSearch = (e) => {
    // prevenir propagación y el refresh
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <div>
      <h1>Búsqueda</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Buscar un Héroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type='submit'
              className='btn btn-outline-primary mt-1'
            > Buscar
            </button>

          </form>



        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            (q === '') ?
              <div className="alert alert-primary">
                Buscar un Héroe
              </div> :
              (heroesFiltered.length === 0) &&

              <div className="alert alert-danger">
                No se encontró un Héroe llamado <b>{q}</b>
              </div>

          }

          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}

              />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default SearchScreen;
