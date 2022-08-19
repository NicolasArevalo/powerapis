import React from 'react'

import { useLocation } from '../../../hooks/rnm'

const Locations = () => {
    const { data: dataLocation, loading: loadingLocation } = useLocation()
    return (
        <main>
            {loadingLocation && <h1>Cargando</h1>}
            <div id="card" className='mt-5 grid gap-2 w-full max-w-[700px] m-auto justify-center'>
                {dataLocation.map(el => (
                    <div className='rounded-md bg-gray-100 border border-white py-2 px-6 flex flex-col items-center justify-center' key={el.id}>
                        <div className="text">
                            <h2 className='text-gray-800 font-bold text-center border-b border-red-900'>{el.name}</h2>
                            <h4 className='text-gray-700 mt-2'>{el.type}</h4>
                            <span className='text-sm text-gray-500'>{el.dimension}</span>
                        </div>
                    </div>
                ))}

            </div>
        </main>
    )
}

export default Locations