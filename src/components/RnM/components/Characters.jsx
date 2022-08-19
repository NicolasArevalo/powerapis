import React from 'react'

import { useCharacter } from '../../../hooks/rnm'

const Characters = () => {
    const { data: dataCharacter, loading: loadingCharacter } = useCharacter()
    return (
        <main>
            {loadingCharacter && <h1>Cargando</h1>}
            <div id="card" className='mt-5 grid gap-2 w-full max-w-[600px] m-auto justify-center'>
                {dataCharacter.map(el => (
                    <div className='bg-gray-100 py-2 px-4 flex flex-col items-center justify-center' key={el.id}>
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


        </main>
    )
}

export default Characters