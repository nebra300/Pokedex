import React from 'react'
import {capitalize} from '../../customLibs/customLibs'

function PokemonAbilities(props) {
    return (
        <div className="myCard">
            <h4>Abilities:</h4> 
            {props.pokemonAbilities.map(ability=>{
                return ability.is_hidden===false ? <span key={ability.ability.name}>{ capitalize(ability.ability.name.replace("-", " "))}<br/></span> : null 
            })}
            <hr/>
            <h5>Hidden Abilities:</h5>
            {props.pokemonAbilities.map(ability=>
                ability.is_hidden===true ? <span key={ability.ability.name}>{ capitalize(ability.ability.name.replace("-", " "))}<br/></span> : null 
            )}
        </div>
    )
}


export default PokemonAbilities;
