import React from 'react'

const PokemonThumnail = ({id, name, image, type}) => {
    return (
        <div className="thumb-container">
            <div className="number">
                <small>#0{id}</small>
            </div>
        
        </div>
    )
}

export default PokemonThumnail
