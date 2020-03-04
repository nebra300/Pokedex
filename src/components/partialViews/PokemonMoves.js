import React, { useState, useEffect } from 'react'

import style from '../../style.js';

import PagedTable from './PagedTable.js'

import { capitalize } from '../../customLibs/stringOperations'


function PokemonMoves(props) {
    const moves = props.pokemonMoves;

    const versions = [ ...new Set([].concat.apply([], moves.map(item=>
        item.version_group_details.map(v=>{return v.version_group.name })))) ]

    const [version, setVersion] = useState(versions[0]);
    const [tableData, setTableData] = useState([]);


    useEffect(() => {
        var x = 0;

        const versionSpecificData = [].concat.apply([], moves.map(item=>
            item.version_group_details.map(v=>
                v.version_group.name===version ? {name: item.move.name, ...v} : null
            ).filter(fil=>fil!==null)
        ).filter(fil2=>fil2.length!==0)).filter((v, i, a) => a.indexOf(v) === i);

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
        <div style={style.containerStyle}>
            <h3>Moves</h3>
            <form className="form">
                <select onChange={(e)=>handleComboChange(e)} style={style.combo} className="form-control">
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