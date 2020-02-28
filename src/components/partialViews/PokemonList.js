import React from 'react'
import PokemonThumbnail from '../partialViews/PokemonThumbnail';
import {Link} from 'react-router-dom';

function PokemonList(props) {
    return(
        <>
            <div className="row">
                {
                    props.pokemon.map((pokemonName)=>{
                        return( 
                            <div className="col-md-4" key={pokemonName}>
                               <Link to={"/pokemon/".concat(pokemonName)}>
                                    <PokemonThumbnail pokemonName={pokemonName}/>
                               </Link>
                            </div>
                        )    
                    })
                }
            </div>
        </>
    );
}

export default PokemonList;
