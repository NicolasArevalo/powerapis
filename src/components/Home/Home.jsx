import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
    return (
        <div className="home h-screen grid place-content-center">
            <div className="h-4/5 p-6 text-gray-800 font-light">
                <h1 className='text-6xl'>Powerapis</h1>
                <p className='my-2'>Website creado por 
                    <a href="https://niiico.com" className='m-1 underline'>Nico</a>
                 para reunir todos sus proyectos con APIs en uno.</p>
                <nav>
                    <ul className='text-3xl'>
                        <li className='mb-4 text-right'><Link to='/nasa'> Nasa <i className="fa-solid fa-rocket"></i></Link></li>
                        <li className='mb-4 text-right'><Link to='/marvel'> Marvel <i className="fa-solid fa-rocket"></i></Link></li>
                        <li className='mb-4 text-right'><Link to='/rickandmorty'> Rick and Morty <i className="fa-solid fa-rocket"></i></Link></li>
                    </ul>
                </nav>
            </div>
            <footer className='fixed bottom-0 left-0 right-0 py-2 bg-transparent text-center'><span>Este sitio is under construction yet, no me juzgues mano</span></footer>
        </div>
    )
}

export default Home