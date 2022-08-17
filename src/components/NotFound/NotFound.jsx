import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='notfound'>
      <h1>404</h1>
      <p>Ni idea de a dónde quieres ir, mano.</p>
      <span>Regresa al <Link to='/'> inicio</Link> </span>
    </div>
  )
}

export default NotFound