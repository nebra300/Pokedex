import React from 'react'
import style from '../../style';

function PokemonAbilities(props) {
    return (
        <div style={style.containerStyle}>
            <h5>Abilities:</h5> 
            {props.pokemonAbilities.map(ability=>{
                return ability.is_hidden===false ? <span key={ability.ability.name}>{ability.ability.name} </span> : null 
            })}
            <hr/>
            <h6>Hidden Abilities:</h6>
            {props.pokemonAbilities.map(ability=>
                ability.is_hidden===true ? <span key={ability.ability.name}>{ability.ability.name} </span> : null 
            )}
        </div>
    )
}


export default PokemonAbilities;
