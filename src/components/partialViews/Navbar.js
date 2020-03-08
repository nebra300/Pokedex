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

                <ul className="nav navbar-nav pull-xs-right">
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
        </nav>
        
    )
}
