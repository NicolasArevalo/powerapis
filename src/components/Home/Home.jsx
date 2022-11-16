import React from 'react'
import { Link } from 'react-router-dom'
import MiniLoading from '../Loading/MiniLoading'

import './Home.scss'

const Home = () => {
    return (
        <div className="container container-home">
            <div className="home">
                <h1 className='nes-text is-primary'>Powerapis</h1>
                <p className=''>Website creado por
                    <a href="https://niiico.com" className='nes-btn is-success'><i class="nes-icon coin is-small"></i> Nico</a>
                    para reunir todos sus proyectos con APIs en uno.</p>
                <nav>
                    <ul className=''>
                        <li ><Link className='nes-btn is-primary' to='/nasa' > Nasa <i className="fa-solid fa-rocket"></i></Link></li>
                        <li ><Link className='nes-btn is-primary' to='/marvel'> Marvel <i className="fa-solid fa-rocket"></i></Link></li>
                        <li ><Link className='nes-btn is-primary' to='/rickandmorty'> Rick and Morty <i className="fa-solid fa-rocket"></i></Link></li>
                        <li ><Link className='nes-btn is-primary' to='/Valorant'> Valorant <i className="fa-solid fa-rocket"></i></Link></li>
                    </ul>
                </nav>
                <section>
                    <h3>Social media</h3>
                    <section class="icon-list">
                        <a href="https://twitter.com/lunago28"><i class="nes-icon twitter is-medium"></i></a>
                        <a href="https://github.com/NicolasArevalo"><i class="nes-icon github is-medium"></i></a>
                        <a href="https://linkedin.com/in/nicolás-arévalo-842839188/"><i class="nes-icon linkedin is-medium"></i></a>
                    </section>
                </section>
            </div>
            <footer className='nes-container with-title is-centered'><span>Este sitio is under construction yet, no me juzgues mano</span></footer>
        </div>
    )
}

export default Home