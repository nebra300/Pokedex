import React from 'react';
import style from '../../style.js';
import {useState} from 'react';
import { Transition } from "react-transition-group";

function PokedexEntries(props) {
    const pokemonSpecies = props.pokemonSpecies;
    const pokemonAlias = "The " + pokemonSpecies.info.genera.filter(item => item.language.name==="en")[0].genus;
    const pokedexEntries = pokemonSpecies.info.flavor_text_entries.filter(item=>item.language.name==="en");

    const [showPokedexEntries, setShowPokedexEntries] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    //EXPANDING THE CONTAINER AND SETTING OVERFLOW
    const containerDefaultStyle = {
        transition: `height 300ms ease-in-out`,
        height: 350
    }    
    const containerTransitionStyles = {
        entering: { height: 1050 },
        entered:  { 
            height: 1050,
        },
        exiting:  { height: 350 },
        exited:  { height: 350  }
    };


    //FADE IN CONTENT ON EXPANDED CONTAINER
    const contentDefaultStyle = {
        transition: `all 300ms ease-in-out`,
        opacity: 0,
        height: 0
    }    
    const contentTransitionStyles = {
        entering: { opacity: 1, height: 700, overflowY: 'scroll' },
        entered:  { opacity: 1, height: 700, overflowY: 'scroll' },
        exiting:  { opacity: 0, height: 0, overflowY: 'scroll' },
        exited:  { opacity: 0, height: 0, overflowY: 'hidden' }
    };

    return (
        <Transition
            in={isOpen}
            timeout={300}
            onEntered={()=>setShowPokedexEntries(true)}
        >
        { state=> (
            <div style={{
                ...style.containerStyle,
                ...containerDefaultStyle,
                ...containerTransitionStyles[state]
            }}>            
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
                                onClick={()=>{
                                    if(isOpen===false){
                                        setIsOpen(true)
                                    }
                                    else{
                                        setShowPokedexEntries(false)
                                    }                                
                                }}
                            >
                            </button>
                        </div>
                    </div> 
                    <hr/>
                    <Transition
                        in={showPokedexEntries}
                        timeout={300}
                        onExited={()=>setIsOpen(false)}
                    >
                    {state=>(
                        <div className="row" style={{
                            ...contentDefaultStyle,
                            ...contentTransitionStyles[state]
                        }}>
                            <div className="col">
                                {pokedexEntries.map(entry=>
                                    <div style={style.containerStyle}>
                                        <h5>{entry.version.name}:</h5>
                                        <h6>{entry.flavor_text}</h6>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    </Transition>
                </div>
            </div>
            )}
            </Transition>
    )
}

export default PokedexEntries;