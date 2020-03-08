import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonDetails } from '../pokemonDetails/PokemonDetails';
import altImg from '../../images/pokeball.jpg';

import { capitalize } from '../../customLibs/customLibs';


function PokemonThumbnail(props) {
    const pokemon = useSelector(state => state.pokedex.pokemon[props.pokemonName])
    const dispatch = useDispatch();

    useEffect(() => {
        fetchPokemonDetails(pokemon, dispatch);
    }, [pokemon, dispatch]);


    if(pokemon.details.loading===true){
        return (
            <div className="myCard">
                {pokemon.details.loading===true ? <h5>Loading...</h5> : null}  
            </div>
        );
    }

    if(pokemon.details.info){
        return(
            <div className="myCard">
                {pokemon.details.info ? 
                    <img alt={altImg} className="rounded-circle thumbnailImg" src={pokemon.details.info.sprites.front_default} /> 
                : null}
                <h2>{capitalize(pokemon.name)}</h2>
            </div>
        )
    }


    return null;
}


export default PokemonThumbnail;
