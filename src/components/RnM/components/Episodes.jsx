import React from 'react'

import { useEpisode } from '../../../hooks/rnm'

const Episodes = () => {

    const { data: dataEpisode, loading: loadingEpisode } = useEpisode()

    return (
        <main>
            {loadingEpisode && <h1>Cargando</h1>}
            <div id="card" className='mt-5 grid gap-2 w-full max-w-[600px] m-auto justify-center'>
                {dataEpisode.map(el => (
                    <div className='rounded-md bg-gray-100 border border-white py-2 px-6 flex flex-col items-center justify-center' key={el.id}>
                        <div className="text">
                            <h2 className='text-gray-800 font-bold text-center border-b border-red-900'>{el.name}</h2>
                            <h4 className='text-gray-700'>{el.air_date}</h4>
                            <span>Episode: {el.episode}</span>
                        </div>
                    </div>
                ))}

            </div>
        </main>
    )
}

export default Episodes