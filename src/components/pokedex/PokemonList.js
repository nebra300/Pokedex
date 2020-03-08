import React from 'react'
import PokemonThumbnail from './PokemonThumbnail';
import { useHistory } from "react-router-dom";


function PokemonList(props) {
    var history = useHistory()

    function handleClick(pathname) {
        history.replace(history.location.pathname, {
            transition: "fade",
            duration: 500
        });
        history.push(pathname, {
            transition: "fade",
            duration: 500
        });
    }


    return(
        <>
            <div className="row">
                {
                    props.pokemon.map((pokemonName)=>{
                        return( 
                            <div className="col-md-4" key={pokemonName}>
                               <div onClick={()=>handleClick("/pokemon/".concat(pokemonName))}>
                                    <PokemonThumbnail pokemonName={pokemonName}/>
                               </div>
                            </div>
                        )    
                    })
                }
            </div>
        </>
    );
}

export default PokemonList;
