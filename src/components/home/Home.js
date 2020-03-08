import React from 'react';

import Hero from './Hero';
import { useHistory } from "react-router-dom";


function Home() {
    var history = useHistory()

    function handleClick() {
      history.push("/pokedex", {
        transition: "slide",
        duration: 1200
      });
    }

    const style={
      btn: {
        position: "fixed",
        zIndex: 1000,
        top: "50%",
        left: "50%",
        height: "150px",
        width: "400px",
        transform: "translate(-50%, -50%)",
      }
    }

    return (
      <>
      <Hero/>
      <div>
          <button className="btn btn-primary" style={style.btn} onClick={handleClick}>
            Get Started With Pokedex
          </button>
      </div>
      </>
    )
}

export default Home;