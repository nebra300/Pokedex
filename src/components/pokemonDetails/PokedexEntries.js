import React from 'react';
import {useState} from 'react';
import { Transition } from "react-transition-group";
import {capitalize} from '../../customLibs/customLibs'


const localStyle = {
    contentDefaultStyle: {
        transition: `all 350ms ease-in-out`,
        opacity: 0,
        height: 0,
        textAlign: "center"
    },
    contentTransitionStyles: {
        entering: { 
            opacity: 1, 
            height: 700, 
            overflowY: 'scroll'
        },
        entered: { 
            opacity: 1, 
            height: 700, 
            overflowY: 'scroll'
        },
        exiting: { 
            opacity: 0, 
            height: 0, 
            overflowY: 'scroll'
        },
        exited: { 
            opacity: 0, 
            height: 0, 
            overflowY: 'hidden' 
        }
    }
}

function PokedexEntries(props) {
    const pokemonSpecies = props.pokemonSpecies;
    const pokemonAlias = "The " + pokemonSpecies.info.genera.filter(item => item.language.name==="en")[0].genus;
    const pokedexEntries = pokemonSpecies.info.flavor_text_entries.filter(item=>item.language.name==="en");

    const [showPokedexEntries, setShowPokedexEntries] = useState(false);

    function HeaderRow(){
        return (
            <>
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
            </>
        )
    }

    function ButtonRow() {
        return (
            <div className="row">
                <div className="col">
                    <button
                        className="btn btn-primary btnCircle"
                        onClick={()=>{
                            setShowPokedexEntries(!showPokedexEntries)                              
                        }}
                    >
                    </button>
                </div>
            </div>
        )
    }

    
    return (
        <div className="myCard">
            <div className="container">

                <HeaderRow />

                <ButtonRow />

                <hr/>

                <Transition
                    in={showPokedexEntries}
                    timeout={300}
                >
                    {state=>(
                        <div className="row" style={{
                            ...localStyle.contentDefaultStyle,
                            ...localStyle.contentTransitionStyles[state]
                        }}>
                            <div className="col">
                                {pokedexEntries.map(entry=>
                                    <div key={entry.version.name} className="myCard">
                                        <h5>{capitalize(entry.version.name.replace("-", " "))}:</h5>
                                        <h6>{entry.flavor_text}</h6>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Transition>

            </div>
        </div>               
    )
}

export default PokedexEntries;