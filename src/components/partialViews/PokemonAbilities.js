import React from 'react'
import style from '../../style';
import {capitalize} from '../../customLibs/stringOperations'

function PokemonAbilities(props) {
    return (
        <div style={style.containerStyle}>
            <h4>Abilities:</h4> 
            {props.pokemonAbilities.map(ability=>{
                return ability.is_hidden===false ? <><span key={ability.ability.name}>{ capitalize(ability.ability.name.replace("-", " "))} </span><br/></> : null 
            })}
            <hr/>
            <h5>Hidden Abilities:</h5>
            {props.pokemonAbilities.map(ability=>
                ability.is_hidden===true ? <><span key={ability.ability.name}>{ capitalize(ability.ability.name.replace("-", " "))}</span><br/></> : null 
            )}
        </div>
    )
}


export default PokemonAbilities;
