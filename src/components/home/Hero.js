import React from 'react';
import img from '../../images/pikachu.jpg';


function Hero() {  
    const style = {
      container: {
        position: 'fixed',
        height: "100%",
        top: 0, 
        left: 0,
      },
      img1: {
        position: 'fixed',
        height: "100%",
        top: 0, 
        left: 0,
        transform: "scaleX(-1)"
      },
      img2: {
        position: 'fixed',
        height: "100%",
        top: 0, 
        right: 0,
      }
    }

    return(
      <div style={style.container}>
        <img src={img} alt="#" style={style.img1}/>
        <img src={img} alt="#" style={style.img2}/>
      </div>
    )
}

export default Hero;