import React from 'react'

const PokemonThumnail = ({id, name, image, type}) => {
    return (
        <div className="thumb-container">
            <div className="number">
                <small>#0{id}</small>
            </div>
        <img src={image} alt={name} />
        <div className="detail-wrapper">
            <h3>{name}</h3>
            <small>Tipo: {type}</small>
        </div>
        </div>
    )
}

export default PokemonThumnail
