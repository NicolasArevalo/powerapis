import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

    const handleClick = () => {
        const navbar = document.querySelector('.wrapper_layoutNavbar')
        navbar.classList.toggle('mostrar')
    }

    return (
        <>
            <nav className='wrapper_layoutNavbar pl-16'>
                <aside className='layoutNavbar h-screen'>
                    <ul className='h-4/5 mt-4 flex flex-col justify-around font-light text-2xl'>
                        <li onClick={handleClick}> <Link to='/'>Inicio</Link> </li>
                        <li onClick={handleClick}> <Link to='/nasa'>Nasa</Link> </li>
                        <li onClick={handleClick}> <Link to='/marvel'>Marvel</Link> </li>
                        <li onClick={handleClick}> <Link to='/rickandmorty'>Rick and Morty</Link> </li>
                        {/* <li onClick={handleClick}> <Link to='/instagram'>Instagram</Link> </li> */}
                    </ul>

                </aside>

                <button className='btn-cerrar' onClick={handleClick}>
                    <i className="fa-solid fa-caret-left p-2 bg-red-200 m-1"></i>
                </button>

            </nav>
            <button className='btn-abrir' onClick={handleClick}>
                    <i className="fa-solid fa-caret-right p-2 bg-red-200 m-1"></i>
            </button>
            <Outlet />

            <footer className='fixed bottom-0 left-0 right-0 py-2 text-center'><span>Este sitio is under construction yet, no me juzgues mano</span></footer>
        </>
    )
}

export default Navbar