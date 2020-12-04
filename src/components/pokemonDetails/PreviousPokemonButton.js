import React from 'react';
import {useSelector} from 'react-redux';
import TransitionLink from '../partialViews/TransitionLink';
import PropTypes from 'prop-types';
import { capitalize } from '../../customLibs/customLibs';

function PreviousPokemonButton(props) {
    const previousPokemon = useSelector(state => state.pokedex.pokemonKeys[state.pokedex.pokemonKeys.indexOf(props.pokemonName)-1]);

    if(previousPokemon===undefined) return null;

    return (
        <div>
            <TransitionLink
                pathname={"/pokemon/".concat(previousPokemon)}
                transition="slideLeft"
                duration={1000}
                previousTransition="fade"
                previousDuration={500}
                className={props.className}
                style={props.style}
            >
                <h4>{"< " + capitalize(previousPokemon)}</h4>
            </TransitionLink>
        </div>
    )
}

PreviousPokemonButton.propTypes = {
    pokemonName: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
}

export default PreviousPokemonButton;