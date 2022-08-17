import { useState } from 'react'
import './Instagram.css'

import MiniLoading from '../Loading/MiniLoading'
import UserInfo from './UserInfo'

const Instagram = () => {
  
  /* const { data, loading} = useFetchData( inputValue ) */

  const [inputValue, setInputValue] = useState('')
  const [username, setUsername] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }
  const handleSubmit = e => {
    e.preventDefault()

    if (inputValue.trim().length > 2) {
      setInputValue('')
      setUsername(inputValue)
    }
  }

  
  return (
    <div className='igWrapper'>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Ingresa el nombre de usuario</b>
          <input type="text" name="ig-user" id="ig-user" value={inputValue} onChange={handleChange} />
        </label>
        <button>Enviar</button>
      </form>

      {/* <MiniLoading status={isLoading} /> */}
      <UserInfo username={username} />

      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>



    </div>
  )
}

export default Instagram