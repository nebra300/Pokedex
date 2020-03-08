import {
    FETCH_POKEMON_REQUEST,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_ERROR,
    FETCH_POKEMON_DETAILS,
    FETCH_POKEMON_DETAILS_SUCCESS,
    FETCH_POKEMON_SPECIES,
    FETCH_POKEMON_SPECIES_SUCCESS,
    FETCH_EVOLUTION_CHAIN,
    FETCH_EVOLUTION_CHAIN_SUCCESS
} from '../actions/actionTypes';

import {arrayToObject} from '../customLibs/customLibs'

const initialState = {
    url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=964',
    loading: false,
    pokemon: {},
    pokemonKeys: [],
    error: ''
}



export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemon: {
                    ...state.pokemon,
                    ...arrayToObject(action.payload.results.map(poke=>{
                        return {
                            name: poke.name,
                            details: {
                                loading: false,
                                url: poke.url
                            }
                        }

                    }), 'name'),
                },
                pokemonKeys: [
                    ...state.pokemonKeys,
                    ...action.payload.results.map(poke=>poke.name)
                ]
            };
        case FETCH_POKEMON_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_POKEMON_DETAILS:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.name]: {
                        ...state.pokemon[action.payload.name],
                        details: {
                            ...state.pokemon[action.payload.name].details,
                            loading: true
                        }
                    }
                }
            }
        case FETCH_POKEMON_DETAILS_SUCCESS:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.name]: {
                        ...state.pokemon[action.payload.name],
                        details: {
                            ...state.pokemon[action.payload.name].details,
                            loading: false,
                            info: action.payload.info
                        },
                        species: {
                            loading: false,
                            url: action.payload.info.species.url
                        }
                    }
                }
            }
        case FETCH_POKEMON_SPECIES:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.name]: {
                        ...state.pokemon[action.payload.name],
                        species: {
                            ...state.pokemon[action.payload.name].species,
                            loading: true,
                        }
                    }
                }
            }
        case FETCH_POKEMON_SPECIES_SUCCESS:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.name]: {
                        ...state.pokemon[action.payload.name],
                        species: {
                            ...state.pokemon[action.payload.name].species,
                            loading: false,
                            info: action.payload.info
                        }
                    }
                }
            }
        case FETCH_EVOLUTION_CHAIN:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.name]: {
                        ...state.pokemon[action.payload.name],
                        evolution_chain: {
                            loading: true
                        }
                    }
                }
            }
        case FETCH_EVOLUTION_CHAIN_SUCCESS:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.name]: {
                        ...state.pokemon[action.payload.name],
                        evolution_chain: {
                            loading: false,
                            info: action.payload.info
                        }
                    }
                }
            }
        default:
            return state;
    }
}