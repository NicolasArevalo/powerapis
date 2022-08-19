import { useState } from 'react'
import { tw } from 'https://cdn.skypack.dev/twind'

import './Rnm.css'
import Characters from './components/Characters'
import Episodes from './components/Episodes'
import Locations from './components/Locations'

const RnM = () => {

  const [ state, setState ] = useState(0)

  return (
    <main id="RnM-container">

      <nav className='w-full my-2 bg-transparent text-sm sm:text-base'>
        <ul className='flex justify-around'>
          <li
          onClick={() => setState(0)} 
          className='cursor-pointer hover:border-blue-300 border-2 transition border-solid border-gray-300 rounded-full py-1 px-3'>Characters</li>
          <li 
          onClick={() => setState(1)} 
          className='cursor-pointer hover:border-blue-300 border-2 transition border-solid border-gray-300 rounded-full py-1 px-3'>Locations</li>
          <li
          onClick={() => setState(2)}  
          className='cursor-pointer hover:border-blue-300 border-2 transition border-solid border-gray-300 rounded-full py-1 px-3'>Episodes</li>
        </ul>
      </nav>

      { state === 0 ? <Characters /> : null}
      { state === 1 ? <Locations /> : null}
      { state === 2 ? <Episodes /> : null}

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </main>
  )
}

export default RnM