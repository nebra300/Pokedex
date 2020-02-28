import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/International_Pokémon_logo.svg';

export default function Navbar() {
    const style={
        logoStyle: {
            width: "50%",
            height: "50%"
        }
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="#" style={style.logoStyle} />
            </Link>

            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <h3>Home</h3>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/pokedex" className="nav-link">
                        <h3>Pokedex</h3>
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
        
    )
}
