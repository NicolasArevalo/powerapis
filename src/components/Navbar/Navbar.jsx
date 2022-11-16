import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {

    const handleClick = () => {
        const navbar = document.querySelector('.wrapper_layoutNavbar')
        navbar.classList.toggle('mostrar')
    }

    return (
        <>
            <nav className='wrapper_layoutNavbar'>
                <aside className='layoutNavbar '>
                    <ul className=''>
                        <li onClick={handleClick}> <Link to='/'>Inicio</Link> </li>
                        <li onClick={handleClick}> <Link to='/marvel'>Marvel</Link> </li>
                        <li onClick={handleClick}> <Link to='/nasa'>Nasa</Link> </li>
                        <li onClick={handleClick}> <Link to='/rickandmorty'>Rick and Morty</Link> </li>
                        <li onClick={handleClick}> <Link to='/valorant'>Valorant</Link> </li>
                        {/* <li onClick={handleClick}> <Link to='/instagram'>Instagram</Link> </li> */}
                    </ul>

                    <section className="icon-list">
                        <a href="https://niiico.com"><i className="nes-icon coin is-medium"></i></a>
                        <a href="https://twitter.com/lunago28"><i className="nes-icon twitter is-medium"></i></a>
                        <a href="https://github.com/NicolasArevalo"><i className="nes-icon github is-medium"></i></a>
                        <a href="https://linkedin.com/in/nicolás-arévalo-842839188/"><i className="nes-icon linkedin is-medium"></i></a>
                    </section>

                </aside>

                <button className='btn-cerrar btn-navbar' onClick={handleClick}>
                    <span>{'<'}</span>
                </button>

            </nav>
            <button className='btn-abrir btn-navbar' onClick={handleClick}>
                <span>{'>'}</span>
            </button>
            <Outlet />

            <footer className='nes-container with-title is-centered'>
                <p>Este sitio está under construction, no me juzgues mano.</p>
            </footer>
        </>
    )
}

export default Navbar