import React from 'react'
import { HeroCard } from '../hero/HeroCard';
import { useForm } from '../hooks/useForm'
import getHeroesByName from '../selectors/getHeroesByName';

const SearchScreen = () => {

  const [formValues, handleInputChange] = useForm({
    searchText: '',
  });

  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName('algo');

  const handleSearch = (e) => {
    // prevenir propagación y el refresh
    e.preventDefault();
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
