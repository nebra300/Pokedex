import React from 'react'
import style from '../../style';

function PokemonTypes(props) {
    return (
        <div style={style.containerStyle}>
            <h5>Types:</h5> 
            {props.pokemonTypes.map(type=>{
                return <span key={type.type.name}>{type.type.name} </span>
            })}
        </div>
    )
}

export default PokemonTypes;