import { useState, useEffect } from 'react'
import { useCharacter } from '../../hooks/marvel/useCharacter'

import MiniLoading from '../Loading/MiniLoading'
import Personaje from './Personaje'
import Busqueda from './Busqueda'

import './Marvel.css'

const Marvel = () => {

    const [inputValue, setInputValue] = useState('')
    const [query, setQuery] = useState('')
    
    const { data, loading } = useCharacter()
    
  
    const handleChange = e => {
      setInputValue(e.target.value)
      console.log(inputValue)
    }
    const handleSubmit = e => {
      e.preventDefault()
  
      if (inputValue.trim().length > 2) {
        setInputValue('')
        setQuery(inputValue)
      }
    }

    return (

        <>

            {loading && <MiniLoading />}

            <h1>Personajes de Marvel</h1>

            <form onSubmit={handleSubmit} className='searcher'>
                <label>
                    <b>Busca personajes (ten en cuenta que están en inglés)</b>
                    <input type="text" name="ig-user" id="ig-user" value={inputValue} onChange={handleChange} />
                </label>
                <button>Enviar</button>
            </form>

            <Busqueda query={query} />

            <Personaje data={data.data} />

            <footer>
                <a href="https://marvel.com">{data.atr}</a>
            </footer>

        </>
    )
}

export default Marvel