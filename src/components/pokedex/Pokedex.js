import React from 'react';
import PokemonList from './PokemonList';
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';


function Pokedex() {
    const pokemon = useSelector(state => state.pokedex.pokemonKeys);

    const [pokemonList, setPokemonList] = useState(pokemon);

    const [pokedex, setPokedex] = useState("National");
    const [query, setQuery] = useState("");
    const [num, setNum] = useState(20);


    //Filter options
    useEffect(()=>{
        setNum(20);
        var tempList = pokemon;
        switch(pokedex){
            case "National":
                tempList=tempList.slice(0, 721);
                break;
            case "Kanto":
                tempList=tempList.slice(0, 151);
                break;
            case "Johto":
                tempList=tempList.slice(151, 251);
                break;
            case "Hoenn":
                tempList=tempList.slice(251, 386);
                break;
            case "Sinnoh":
                tempList=tempList.slice(386, 494);
                break;
            case "Unova":
                tempList=tempList.slice(494, 649);
                break;
            case "Kalos":
                tempList=tempList.slice(649, 721);
                break;
            // case "Alola":
            //     tempList=pokemon.slice(721, 807);
            //     tempList=tempList.concat(pokemon.filter(poke=>poke.name.toLowerCase().includes("alola")));
            //     break;
            default:
                break;
        }

        tempList = tempList.filter((poke)=>poke.toLowerCase().includes(query.toLowerCase()));

        setPokemonList(tempList);

    }, [pokemon, pokedex, query])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    })

    //event handlers
    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    }
    const handleComboChange = (e) => {
        setPokedex(e.target.value);
    }
    const handleScroll = (e) => {
        const el = e.target;
        const bottom = el.clientHeight + el.scrollTop > el.scrollHeight-100
        if (bottom) {
            setNum(num+20);
        }
        console.log(el)
    }

    return(
        <div onScroll={(e)=>handleScroll(e)} className="pokedexPage">
            <div className="container">
                <div className="pokedexContent">
                <h1>POKEDEX</h1>
                    <form className="form form-inline">
                        <input 
                            type="text"
                            id="PokeSearch"
                            className="form-control flex-grow-1 text-center"
                            placeholder="Search"
                            onChange={(e)=>handleSearchChange(e)}
                            autoComplete="off"
                        />
                        <select onChange={(e)=>handleComboChange(e)} className="form-control">
                            <option value="National">National</option>
                            <option value="Kanto">Kanto</option>
                            <option value="Johto">Johto</option>
                            <option value="Hoenn">Hoenn</option>
                            <option value="Sinnoh">Sinnoh</option>
                            <option value="Unova">Unova</option>
                            <option value="Kalos">Kalos</option>
                        </select>
                    </form>
                    <PokemonList pokemon={pokemonList.slice(0, num)}/>
                </div>
            </div>
        </div>
    )
}


export default Pokedex;
