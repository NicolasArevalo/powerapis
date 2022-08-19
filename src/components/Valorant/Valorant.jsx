import { useState } from 'react'

import Characters from './components/Characters'
import Weapons from './components/Weapons'

import './Valorant.css'



const Valorant = () => {

    const [state, setState] = useState(0)



    return (
        <main id="Valorant-container">
            <nav className='w-full my-2 bg-transparent text-sm sm:text-base'>
                <ul className='flex justify-around'>
                    <li
                        onClick={() => setState(0)}
                        className='cursor-pointer hover:border-blue-300 border-2 transition border-solid border-gray-300 rounded-full py-1 px-3'>
                        Personajes</li>
                    <li
                        onClick={() => setState(1)}
                        className='cursor-pointer hover:border-blue-300 border-2 transition border-solid border-gray-300 rounded-full py-1 px-3'>
                        Armas</li>
                    <li
                        onClick={() => setState(2)}
                        className='cursor-pointer hover:border-blue-300 border-2 transition border-solid border-gray-300 rounded-full py-1 px-3'>
                        Mapas</li>
                </ul>
            </nav>

            {state === 0 ? <Characters /> : null}
            {state === 1 ? <Weapons /> : null}
            {/*{state === 2 ? <Episodes /> : null} */}


        </main>
    )
}

export default Valorant