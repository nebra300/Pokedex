import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonDetails } from '../pages/PokemonDetails';
import altImg from '../../images/pokeball.jpg';

import style from '../../style';

function PokemonThumbnail(props) {
    const pokemon = useSelector(state => state.pokedex.pokemon[props.pokemonName])
    const dispatch = useDispatch();

    useEffect(() => {
        fetchPokemonDetails(pokemon, dispatch);
    }, [pokemon, dispatch]);


    if(pokemon.details.loading===true){
        return (
            <div style={style.containerStyle}>
                {pokemon.details.loading===true ? <h5>Loading...</h5> : null}  
            </div>
        );
    }

    if(pokemon.details.info){
        return(
            <div style={style.containerStyle}>
                {pokemon.details.info ? 
                    <img alt={altImg} className="rounded-circle" style={style.imgStyle} src={pokemon.details.info.sprites.front_default} /> 
                : null}
                <h2>{pokemon.name}</h2>
            </div>
        )
    }


    return (
        <div style={style.containerStyle}></div>
    )
}


export default PokemonThumbnail;
