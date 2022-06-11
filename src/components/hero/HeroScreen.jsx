import React, { useMemo } from 'react'
import getHeroById from '../selectors/getHeroById';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

const HeroScreen = () => {

  const { heroeId } = useParams();
  const navigate = useNavigate()

  // Evita llamados multiples a getHeroById
  const hero = useMemo(() => getHeroById(heroeId), [heroeId])

  const handleReturn = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to='/' />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const imagePath = `/assets/${id}.jpg`

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={imagePath}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: {alter_ego}</b></li>
          <li className='list-group-item'><b>Alter ego: {publisher}</b></li>
          <li className='list-group-item'><b>Alter ego: {first_appearance}</b></li>
        </ul>

        <h5 className='mt-5'>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Regresar
        </button>

      </div>


    </div>
  )
}

export default HeroScreen;