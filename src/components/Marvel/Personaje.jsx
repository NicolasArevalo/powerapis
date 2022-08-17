import React from 'react'
import Card from './Card'
import './Marvel.css'

const Personaje = ({ data }) => {

    return (
        <div className='card-wrapper'>
            { data?.results.map( el => (
                <Card key={el.id} name={el.name} thumbnail={el.thumbnail} id={el.id}  />
            )

            )}
            
        </div>
    )
}

export default Personaje