import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import {FETCH_POKEMON_DETAILS, FETCH_POKEMON_DETAILS_SUCCESS, FETCH_POKEMON_SPECIES, FETCH_POKEMON_SPECIES_SUCCESS} from '../../actions/actionTypes';
import PokemonThumbnail from '../partialViews/PokemonThumbnail';
import PokemonTypes from '../partialViews/PokemonTypes';
import PokemonAbilities from '../partialViews/PokemonAbilities';
import PokedexEntries from '../partialViews/PokedexEntries';
import PokemonStats from '../partialViews/PokemonStats';
import PokemonMoves from '../partialViews/PokemonMoves';


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

    //#region scheck objects
    if(!pokemon) return null;
    if(!pokemon.details) return null;
    if(pokemon.details.loading===true){
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
    if(!pokemon.details.info) return null;


    if(!pokemon.species) return null;
    if(pokemon.species.loading===true){
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
    if(!pokemon.species.info) return null;
    //#endregion


    return (
        <div className="container" >
            <div className="row">
                <div className="col">
                    <PokemonThumbnail pokemonName={pokemon.name} />
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
