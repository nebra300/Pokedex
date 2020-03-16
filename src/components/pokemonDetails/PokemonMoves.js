import React, { useState, useEffect } from 'react'

import PagedTable from '../partialViews/PagedTable'

import { capitalize } from '../../customLibs/customLibs'


function PokemonMoves(props) {
    const moves = props.pokemonMoves;

    const versions = [ ...new Set([].concat.apply([], moves.map(item=>
        item.version_group_details.map(v=>{return v.version_group.name })))) ]

    const [version, setVersion] = useState(versions[0]);
    const [tableData, setTableData] = useState([]);


    //returns version specific data
    const filterVersionSpecificData = (moves, version)=>{
        const versionSpecificData = [].concat.apply([], moves.map(item=>
            item.version_group_details.map(v=>
                v.version_group.name===version ? {name: item.move.name, ...v} : null
            ).filter(fil=>fil!==null)
        ).filter(fil2=>fil2.length!==0)).filter((v, i, a) => a.indexOf(v) === i);

        return versionSpecificData;
    }

    //effect prepares and sets data for table
    useEffect(() => {
        const versionSpecificData = filterVersionSpecificData(moves, version);

        var x = 0; //fake id for dem react keys
        const dataForTable = versionSpecificData.map(item=>{
            x++;
            return {
                Name: capitalize(item.name.replace("-", " ")),
                "Learned from": capitalize(item.move_learn_method.name.replace("-", " ")),
                "Level": item.level_learned_at,
                id: x
            }
        }).sort((a, b) => (a.Level < b.Level) ? 1 : -1)

        setTableData(dataForTable);

    }, [version, moves])


    const handleComboChange = (e)=>{
        setVersion(e.target.value)
    }

    return (
        <div className="myCard" style={{minHeight: "550px"}}>
            <h3>Moves</h3>
            <form className="form">
                <select onChange={(e)=>handleComboChange(e)} className="form-control">
                    {versions.map(ver=>{
                        return(
                            <option key={ver} value={ver}>{ver.replace(/-/g, " ")}</option>
                        )
                    })}
                </select>
            </form>
            {tableData.length!==0 &&
                <PagedTable data={tableData} itemsPerPage={5} exclusions={["id"]} uniqueKeyProperty={"id"}/>
            }
        </div>
    )
}

export default PokemonMoves;