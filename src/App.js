import React from 'react';

import { Switch, Route, Redirect} from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR} from './actions/actionTypes';
import axios from 'axios';

import './App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Navbar from './components/partialViews/Navbar';
import Pokedex from './components/pokedex/Pokedex';
import PokemonDetails from './components/pokemonDetails/PokemonDetails';
import Home from './components/home/Home';


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
  
  if(pokemonLength===0) return null;


  return (
    <div className="App">
      <Navbar/>
      <Route render={({location})=>(
        <TransitionGroup childFactory={child => React.cloneElement(
          child,
          {
            classNames: location.state ? location.state.transition ? location.state.transition : "" : "",
            timeout: location.state ? location.state.duration ? location.state.duration : 0 : 0
          }
        )}>
          <CSSTransition key={location.key} timeout={0}>
            <div className="page">
              <Switch location={location}>
                <Route exact path="/home" component={Home} />
                <Route exact path="/pokedex" component={Pokedex} />
                <Route exact path="/pokemon/:name" component={PokemonDetails} />
                <Redirect from='/' to='/home' />
              </Switch>
            </div>
          </CSSTransition> 
        </TransitionGroup>
      )} />
    </div>
  );
}


export default App;
