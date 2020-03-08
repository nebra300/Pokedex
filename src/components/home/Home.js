import React from 'react';

import Hero from './Hero';
import { useHistory } from "react-router-dom";
import TransitionLink from '../partialViews/TransitionLink'

function Home() {
    var history = useHistory()

    function handleClick() {
      history.replace(history.location.pathname, {
        transition: "fade",
        duration: 500
      });
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
        paddingTop: "50px"
      }
    }

    return (
      <>
        <Hero/>
        <div>
          <TransitionLink
            pathname="/pokedex"
            transition="slide"
            duration={1200}
            previousTransition="fade"
            previousDuration={500}
            className="btn btn-primary"
            style={style.btn}
          >
            <h4>Get Started With Pokedex</h4>
          </TransitionLink>
        </div>
      </>
    )
}

export default Home;