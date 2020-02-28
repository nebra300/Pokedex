import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FETCH_POKEMON_SPECIES, FETCH_POKEMON_SPECIES_SUCCESS } from '../../actions/actionTypes'
import axios from 'axios';

function PokemonSpecies(props) {
    const pokemonSpecies = useSelector(state => state.pokedex.pokemonSpecies.find(poke => poke.name===props.name));
    const dispatch = useDispatch();

    console.log({species: pokemonSpecies});

    const fetchSpecies = () => {
            if(pokemonSpecies.url!=='') {
            if(pokemonSpecies.loading===false && !pokemonSpecies.species_details){
                dispatch({type: FETCH_POKEMON_SPECIES, payload: {name: pokemonSpecies.name}})
            }
            else if(pokemonSpecies.loading===true && pokemonSpecies.species_details===undefined){
                axios.get(pokemonSpecies.url).then(response => {
                    dispatch({ type: FETCH_POKEMON_SPECIES_SUCCESS, payload: {name: pokemonSpecies.name, result: response.data}});
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