import React from 'react';
import img from '../../images/pokemon.jpg';

function Hero() { 
    const style = {
      position: 'fixed',
      top: 50, 
      left: 0,
      minWidth: '100%',
      minHeight: '100%'
    }
    
    return(
      <div style={style}>
        <img src={img} alt="#" style={style}/>
      </div>
    )
}

export default Hero;