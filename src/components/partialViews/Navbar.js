import React from 'react'
import logo from '../../images/International_Pokémon_logo.svg';
import TransitionLink from './TransitionLink';

export default function Navbar() {
    const style={
        logoStyle: {
            width: "50%",
            height: "50%"
        }
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="navbar-header">
                    <TransitionLink
                        pathname="/home"
                        transition="fade"
                        previousTransition="fade"
                        duration={300}
                        previousDuration={500}
                        className="navbar-brand"            
                    >
                        <img src={logo} alt="#" style={style.logoStyle} />
                    </TransitionLink>
                </div>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarTogglerDemo02" 
                    aria-controls="navbarTogglerDemo02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <TransitionLink
                                pathname="/home"
                                transition="fade"
                                previousTransition="fade"
                                duration={300}
                                previousDuration={500}
                                className="nav-link"
                            >
                                <h3>Home</h3>
                            </TransitionLink>
                        </li>

                        <li className="nav-item">
                            <TransitionLink
                                pathname="/pokedex"
                                transition="fade"
                                previousTransition="fade"
                                duration={300}
                                previousDuration={500}
                                className="nav-link"
                            >
                                <h3>Pokedex</h3>
                            </TransitionLink>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
        
    )
}
