import React from 'react';
import { useSelector, /*useDispatch*/ } from 'react-redux';
// import { useEffect } from 'react';

// import axios from 'axios';

// import {
//     FETCH_EVOLUTION_CHAIN, 
//     FETCH_EVOLUTION_CHAIN_SUCCESS
// } from '../../actions/actionTypes';

import altImg from '../../images/pokeball.jpg';

import { capitalize } from '../../customLibs/customLibs';

//import PokemonEvolutionChain from './PokemonEvolutionChain';


// const fetchEvolutionChain = (pokemon, dispatch)=>{
//     if(!pokemon.evolution_chain){
//         dispatch({type: FETCH_EVOLUTION_CHAIN, payload: { name: pokemon.name }})
//     }
//     else{
//         if(pokemon.evolution_chain.loading===true){
//             axios.get(pokemon.species.info.evolution_chain.url).then(response => {
//                 dispatch({ type: FETCH_EVOLUTION_CHAIN_SUCCESS, payload: {name: pokemon.name, info: response.data}});
//             }).catch(error=>{
//                 console.log(error.message);
//             });
//         }
//     }
// }

// const filterPokemonChain = (pokemon) => {
//     const chain = {
//         first: {
//             name: pokemon.evolution_chain.info.chain.species.name,
//             evolves_to: pokemon.evolution_chain.info.chain.evolves_to.map(item=>{
//                 if(item.species){
//                     return {
//                         name: item.species.name,
//                         evolves_to: item.evolves_to.map(item2=>{
//                             if(item2.species){
//                                 return {
//                                     name: item2.species.name
//                                 }
//                             }
//                             else{
//                                 return null;
//                             }
//                         })
//                     }
//                 }
//                 else{
//                     return null
//                 }
//             })
//         }
//     }

//     return chain;
// }

// const findEvolutions = (pokemon)=>{
//     var evolves_from = pokemon.species.info.evolves_from_species!==null ? pokemon.species.info.evolves_from_species.name : null;
//     var evolves_to = [];

//     const chain = filterPokemonChain(pokemon);

//     if(chain.first.name===pokemon.name){
//         evolves_to = chain.first.evolves_to.length!==0 ? chain.first.evolves_to.map(item=>item.name) : null;
//     }
//     else{
//         const temp = chain.first.evolves_to.find(poke=>poke.name===pokemon.name);

//         if(temp!==undefined){
//             evolves_to = temp.evolves_to.length!==0 ? temp.evolves_to.map(poke=>poke.name) : [];
//         }
//     }

//     return {
//         evolves_from,
//         evolves_to
//     }
// }

function PokemonDetailsHeader(props) {
    const pokemon = useSelector(state => state.pokedex.pokemon[props.pokemonName]);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     fetchEvolutionChain(pokemon, dispatch);
    // })

    // if(!pokemon.evolution_chain) return null;

    // if(pokemon.evolution_chain.loading===true){
    //     return(
    //         <div className="myCard">
    //             <h3>Loading...</h3>
    //         </div>
    //     )
    // }
    // if(!pokemon.evolution_chain.info) return null;


    // const evolutions = findEvolutions(pokemon);
    // console.log(evolutions);

    return(
        <div className="myCard">
            {pokemon.details.info ? 
                <img alt={altImg} className="rounded-circle thumbnailImg" src={pokemon.details.info.sprites.front_default} /> 
            : null}
            <h2>{capitalize(pokemon.name)}</h2>
        </div>
    )
}

export default PokemonDetailsHeader;