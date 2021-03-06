import React from 'react'
import PokemonThumbnail from './PokemonThumbnail';
import TransitionLink from '../partialViews/TransitionLink';
import PropTypes from 'prop-types';
 

function PokemonList(props) {
    return(
        <>
            <div className="row">
                {
                    props.pokemon.map((pokemonName)=>{
                        return( 
                            <div className="col-md-4" key={pokemonName}>
                                <TransitionLink 
                                    pathname={"/pokemon/".concat(pokemonName)} 
                                    transition={"fade"}
                                    previousTransition={"fade"}
                                    duration={500}
                                    previousDuration={300}
                                >
                                    <PokemonThumbnail pokemonName={pokemonName}/>
                                </TransitionLink>
                            </div>
                        )    
                    })
                }
            </div>
        </>
    );
}

PokemonList.propTypes = {
    pokemon: PropTypes.array.isRequired
}

export default PokemonList;
