import {combineReducers} from 'redux';

import pokedexReducer from './pokedex';

const rootReducer = combineReducers({
    pokedex: pokedexReducer
});

export default rootReducer;