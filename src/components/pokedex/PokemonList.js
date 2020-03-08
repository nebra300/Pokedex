import React from 'react'
import PokemonThumbnail from './PokemonThumbnail';
import TransitionLink from '../partialViews/TransitionLink';

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
                                    duration={300}
                                    previousDuration={500}
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

export default PokemonList;
