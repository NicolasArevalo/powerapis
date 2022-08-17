import React from 'react'
import { tw } from 'https://cdn.skypack.dev/twind'

import { useCharacter, useEpisode, useLocation } from '../../hooks/rnm'

const RnM = () => {

  const { data: dataCharacter, loading: loadingCharacter } = useCharacter()
  const { data: dataEpisode, loading: loadingEpisode } = useEpisode()
  const { data: dataLocation, loading: loadingLocation } = useLocation()

  return (
    <>

      <nav className='w-full my-2'>
        <ul className='flex justify-around'>
          <li className='cursor-pointer hover:border-blue-300 border-2 transition border-solid border-gray-300 rounded-full py-1 px-3'>Characters</li>
          <li className='cursor-pointer hover:border-blue-300 border-2 transition border-solid border-gray-300 rounded-full py-1 px-3'>Locations</li>
          <li className='cursor-pointer hover:border-blue-300 border-2 transition border-solid border-gray-300 rounded-full py-1 px-3'>Episodes</li>
        </ul>
      </nav>

      {loadingCharacter && <h1>Cargando</h1>}
      <div className='mt-5 grid grid-cols-3 gap-2 w-full max-w-[600px] m-auto justify-center'>
        {dataCharacter.map(el => (
          <div className='bg-gray-200 flex flex-col items-center justify-center' key={el.id}>
            <img src={el.image} alt={el.name} className='max-w-full object-cover flex-grow' />
            <div className="text">
              <h2 className='text-gray-800 font-bold text-center border-b border-red-900'>{el.name}</h2>
              <h4 className='text-gray-700'>{el.species}</h4>
              <span>Status: {el.status}</span>
            </div>
          </div>
        ))}
      </div>
      <nav onClick={() => alert('aún no sirve bro xD')} className='cursor-pointer mx-auto'>1 2 3 4 5 6 7 </nav>


      {loadingEpisode && <h1>Cargando</h1>}
      <div className='mt-5 grid grid-cols-3 gap-2 w-full max-w-[600px] m-auto justify-center'>
        {dataEpisode.map(el => (
          <div className='bg-gray-200 flex flex-col items-center justify-center' key={el.id}>
            <div className="text">
              <h2 className='text-gray-800 font-bold text-center border-b border-red-900'>{el.name}</h2>
              <h4 className='text-gray-700'>{el.air_date}</h4>
              <span>Episode: {el.episode}</span>
            </div>
          </div>
        ))}

      </div>

      {loadingLocation && <h1>Cargando</h1>}
      <div className='mt-5 grid grid-cols-3 gap-2 w-full max-w-[600px] m-auto justify-center'>
        {dataLocation.map(el => (
          <div className='bg-gray-200 flex flex-col items-center justify-center' key={el.id}>
            <div className="text">
              <h2 className='text-gray-800 font-bold text-center border-b border-red-900'>{el.name}</h2>
              <h4 className='text-gray-700'>{el.type}</h4>
              <span>Dimension: {el.dimension}</span>
            </div>
          </div>
        ))}

      </div>




    </>
  )
}

export default RnM