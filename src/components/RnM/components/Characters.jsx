import React from 'react'

import { useCharacter } from '../../../hooks/rnm'
import MiniLoading from '../../Loading/MiniLoading'

const Characters = () => {
    const { data: dataCharacter, loading: loadingCharacter } = useCharacter()
    console.log(dataCharacter)
    return (
        <main>
            {loadingCharacter && <MiniLoading />}
            <div id="cards" className=''>
                {dataCharacter.map(el => (
                    <div className='' key={el.id}>
                        <img src={el.image} alt={el.name} className='' />
                        <div className="text">
                            <h2 className='nes-text is-primary'>{el.name}</h2>
                            <h4 className=''>{el.species}</h4>
                            <span id="timesOnScreen-wrapper" className="nes-badge is-icon">
                                <span id="timesOnScreen" className="is-primary">{el.episode.length}</span>
                            </span>
                            
                            <span className='nes-badge'>
                                {el.status === 'Alive' ? <span className='is-success'>{el.status}</span> : null}
                                {el.status === 'Dead' ? <span className='is-error'>{el.status}</span> : null}
                                {el.status === 'unknown' ? <span className='is-dark'>{el.status}</span> : null}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <nav onClick={() => alert('aún no sirve bro xD')} className=''>1 2 3 4 5 6 7 </nav>


        </main>
    )
}

export default Characters