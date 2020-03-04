import React from 'react'
import style from '../../style';
import { capitalize } from '../../customLibs/stringOperations'


function PokemonTypes(props) {
    return (
        <div style={style.containerStyle}>
            <h4>Types:</h4> 
            {props.pokemonTypes.map(type=>{
                return <span key={type.type.name}>{capitalize(type.type.name)} </span>
            })}
        </div>
    )
}

export default PokemonTypes;