import React from 'react';
import style from '../../style.js';
import {useState} from 'react';


function PokedexEntries(props) {
    const pokemonSpecies = props.pokemonSpecies;
    const pokemonAlias = "The " + pokemonSpecies.info.genera.filter(item => item.language.name==="en")[0].genus;
    const pokedexEntries = pokemonSpecies.info.flavor_text_entries.filter(item=>item.language.name==="en");

    const [showPokedexEntries, setShowPokedexEntries] = useState(false);

    return (
        <div style={style.containerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>{pokemonAlias}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>"{ pokedexEntries[0].flavor_text }"</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button
                            className="btn btn-primary"
                            style={style.btnCircle} 
                            onClick={()=>{setShowPokedexEntries(!showPokedexEntries)}}
                        >
                        </button>
                    </div>
                </div> 
                {
                    showPokedexEntries ? 
                        <div className="row">
                            <div className="col">
                                {pokedexEntries.map(entry=>
                                    <div style={style.containerStyle}>
                                        <h5>{entry.version.name}:</h5>
                                        <h6>{entry.flavor_text}</h6>
                                    </div>
                                )}
                            </div>
                        </div>
                    :
                    null
                }
                 
            </div>
        </div>
    )
}

export default PokedexEntries;
