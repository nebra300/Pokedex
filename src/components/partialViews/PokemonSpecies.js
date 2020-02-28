import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FETCH_POKEMON_SPECIES, FETCH_POKEMON_SPECIES_SUCCESS } from '../../actions/actionTypes'
import axios from 'axios';

function PokemonSpecies(props) {
    const pokemonSpecies = useSelector(state => state.pokedex.pokemon[props.pokemonName].species);
    const dispatch = useDispatch();

    console.log({species: pokemonSpecies});

    const fetchSpecies = () => {
        if(pokemonSpecies.url!=='' && pokemonSpecies.url!==undefined) {
            if(pokemonSpecies.loading===false && !pokemonSpecies.info){
                dispatch({type: FETCH_POKEMON_SPECIES, payload: {name: props.pokemonName}})
            }
            else if(pokemonSpecies.loading===true && !pokemonSpecies.info){
                axios.get(pokemonSpecies.url).then(response => {
                    dispatch({ type: FETCH_POKEMON_SPECIES_SUCCESS, payload: {name: props.pokemonName, info: response.data}});
                }).catch(error=>{
                    console.log(error.message);
                });
            }
        }
    }

    useEffect(() => {
        fetchSpecies();
    })

    return (
        <div>
            
        </div>
    )
}

export default PokemonSpecies;