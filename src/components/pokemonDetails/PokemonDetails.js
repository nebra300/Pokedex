import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import {FETCH_POKEMON_DETAILS, FETCH_POKEMON_DETAILS_SUCCESS, FETCH_POKEMON_SPECIES, FETCH_POKEMON_SPECIES_SUCCESS} from '../../actions/actionTypes';

import PokemonTypes from './PokemonTypes';
import PokemonAbilities from './PokemonAbilities';
import PokedexEntries from './PokedexEntries';
import PokemonStats from './PokemonStats';
import PokemonMoves from './PokemonMoves';
import PokemonDetailsHeader from './PokemonDetailsHeader';

const fetchPokemonDetails = (pokemon, dispatch)=>{
    if(!pokemon.details.info && pokemon.details.loading===false){
        dispatch({ type: FETCH_POKEMON_DETAILS, payload: {name: pokemon.name}});
    }
    else if(!pokemon.details.info && pokemon.details.loading===true){
        axios.get(pokemon.details.url).then(response => {
            dispatch({ type: FETCH_POKEMON_DETAILS_SUCCESS, payload: {name: pokemon.name, info: response.data}});
        }).catch(error=>{
            console.log(error.message);
        });
    }
}

const fetchPokemonSpecies = (pokemon, dispatch) => {
    if(!pokemon.species.info && pokemon.species.loading===false){
        dispatch({type: FETCH_POKEMON_SPECIES, payload: {name: pokemon.name}})
    }
    else if(!pokemon.species.info && pokemon.species.loading===true){
        axios.get(pokemon.species.url).then(response => {
            dispatch({ type: FETCH_POKEMON_SPECIES_SUCCESS, payload: {name: pokemon.name, info: response.data}});
        }).catch(error=>{
            console.log(error.message);
        });
    }
}


function PokemonDetails(props) {
    const pokemon = useSelector(state => state.pokedex.pokemon[props.match.params.name]);
    const dispatch = useDispatch();

    console.log(pokemon);

    useEffect(()=>{
        if(pokemon){
            fetchPokemonDetails(pokemon, dispatch);

            if(pokemon.species){
                fetchPokemonSpecies(pokemon, dispatch);
            }
        }
    }, [pokemon, dispatch])

    //#region check objects
    if(!pokemon) return null;
    if(!pokemon.details) return null;
    if(pokemon.details.loading===true) return null;
    if(!pokemon.details.info) return null;


    if(!pokemon.species) return null;
    if(pokemon.species.loading===true) return null;
    if(!pokemon.species.info) return null;
    //#endregion

    console.log(props.location);

    return (
        <div className="container" >
            <div className="row">
                <div className="col">
                    <PokemonDetailsHeader pokemonName={pokemon.name} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PokedexEntries pokemonSpecies={pokemon.species}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PokemonTypes pokemonTypes={pokemon.details.info.types} />
                    <PokemonAbilities pokemonAbilities={pokemon.details.info.abilities} />
                </div>
                <div className="col">
                    <PokemonStats pokemonStats={pokemon.details.info.stats} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PokemonMoves pokemonMoves={pokemon.details.info.moves} />
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails;
export {fetchPokemonDetails};
