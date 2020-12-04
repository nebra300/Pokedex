import React from 'react';
import {useSelector} from 'react-redux';
import TransitionLink from '../partialViews/TransitionLink';
import PropTypes from 'prop-types';
import { capitalize } from '../../customLibs/customLibs';


function NextPokemonButton(props) {
    const nextPokemon = useSelector(state => state.pokedex.pokemonKeys[state.pokedex.pokemonKeys.indexOf(props.pokemonName)+1]);

    if(nextPokemon===undefined) return null;

    return (
        <div>
            <TransitionLink
                pathname={"/pokemon/".concat(nextPokemon)}
                transition="slideRight"
                duration={1000}
                previousTransition="fade"
                previousDuration={500}
                className={props.className}
                style={props.style}
            >
                <h4>{capitalize(nextPokemon)} ></h4>
            </TransitionLink>
        </div>
    )
}

NextPokemonButton.propTypes = {
    pokemonName: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
}

export default NextPokemonButton;