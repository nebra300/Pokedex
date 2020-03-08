import React from 'react'
import { capitalize } from '../../customLibs/customLibs'


function PokemonTypes(props) {
    return (
        <div className="myCard">
            <h4>Types:</h4> 
            {props.pokemonTypes.map(type=>{
                return <span key={type.type.name}>{capitalize(type.type.name)} </span>
            })}
        </div>
    )
}

export default PokemonTypes;