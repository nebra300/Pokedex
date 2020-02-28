import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import {FETCH_POKEMON_DETAILS, FETCH_POKEMON_DETAILS_SUCCESS} from '../../actions/actionTypes';
import PokemonThumbnail from '../partialViews/PokemonThumbnail';
import PokemonTypes from '../partialViews/PokemonTypes'
import PokemonAbilities from '../partialViews/PokemonAbilities';
//import PokemonSpecies from '../partialViews/PokemonSpecies';

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

function PokemonDetails(props) {
    const pokemon = useSelector(state => state.pokedex.pokemon[props.match.params.name]);
    const dispatch = useDispatch();


    useEffect(()=>{
        fetchPokemonDetails(pokemon, dispatch);
    }, [pokemon, dispatch])


    if(pokemon.details.info!==undefined){
        return (
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <PokemonThumbnail pokemonName={pokemon.name} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <PokemonTypes pokemonTypes={pokemon.details.info.types} />
                        <PokemonAbilities pokemonAbilities={pokemon.details.info.abilities} />
                    </div>
                    <div className="col">
                        {/* <PokemonSpecies name={pokemon.name}/> */}
                    </div>
                </div>
            </div>
        )
    }

    return null;
}

export default PokemonDetails;
export {fetchPokemonDetails};
