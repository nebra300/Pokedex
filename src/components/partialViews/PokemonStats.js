import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'; 

import style from '../../style';
import { capitalize } from '../../customLibs/stringOperations'


function PokemonStats(props) {
    const pokemonStats = props.pokemonStats;

    const chartData = {
        labels: pokemonStats.map(stat=>capitalize(stat.stat.name.replace("-", " "))),
        datasets: [
            {
                backgroundColor: "rgba(233,84,32,0.8)",
                fontSize: 16,
                label: 'Base Stat',
                data: pokemonStats.map(stat=>stat.base_stat)
            }
        ]
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            labels: {
                fontColor: 'black'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: "black",
                    fontSize: 15,
                    beginAtZero: true,
                    min: 0,
                    max: 200
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: "black",
                    fontSize: 15,
                }
            }]
        }
    }

    return (
        <div style={style.containerStyle}>
            <HorizontalBar 
                data={chartData}
                options={chartOptions}
                height={200}
            />
        </div>
    )
}

export default PokemonStats;
