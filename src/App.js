import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR} from './actions/actionTypes';
import axios from 'axios';

import Navbar from './components/partialViews/Navbar';
import Pokedex from './components/pages/Pokedex';
import PokemonDetails from './components/pages/PokemonDetails';
import Home from './components/pages/Home';


import './App.css';

function App() {
  const pokemonLength = useSelector(state => state.pokedex.pokemonKeys.length);
  const loading = useSelector(state => state.pokedex.loading);
  const url = useSelector(state => state.pokedex.url);
  const dispatch = useDispatch();


  useEffect(()=>{
    if(pokemonLength===0 && loading===false){
      dispatch({ type: FETCH_POKEMON_REQUEST });
    }
    if(pokemonLength===0 && loading===true){
      axios.get(url).then(response => {
          dispatch({ type: FETCH_POKEMON_SUCCESS, payload: response.data});
        }).catch(error=>{
          dispatch({ type: FETCH_POKEMON_ERROR, payload: error.message});
      });
    }
  })

  return (
    <div className="App">
        { pokemonLength !== 0 ? 
          <>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokedex" component={Pokedex} />
              <Route exact path="/pokemon/:name" component={PokemonDetails} />
            </Switch>
          </>
          :
          null
        }
    </div>
  );
}

export default App;
