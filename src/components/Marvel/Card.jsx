import React from 'react'

const Card = ({ id, name, thumbnail }) => {
    return (
        <div className='card' key={id}>
            <h6>{name}</h6>
            <img src={thumbnail.path + '.' + thumbnail.extension} alt="" />
        </div>
    )
}

export default Card