import { useState } from 'react'
import { tw } from 'https://cdn.skypack.dev/twind'

import './Rnm.scss'
import Characters from './components/Characters'
import Episodes from './components/Episodes'
import Locations from './components/Locations'

const RnM = () => {

  const [ state, setState ] = useState(0)

  return (
    <main id="RnM-container">

      <nav className=''>
        <ul className=''>
          <li
          onClick={() => setState(0)} 
          className='nes-btn is-warning'>Characters</li>
          <li 
          onClick={() => setState(1)} 
          className='nes-btn is-warning'>Locations</li>
          <li
          onClick={() => setState(2)}  
          className='nes-btn is-warning'>Episodes</li>
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