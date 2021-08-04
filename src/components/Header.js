import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header(props) {

    const setMode = () => {
        // Function to toggle the light/dark mode
        props.setDarkMode(!props.darkMode)
    }
    return (
            <nav>
                <div className="nav__logo">
                    <img src="https://i.pinimg.com/originals/6b/4a/73/6b4a738dd051ec314307435efa574807.png" alt="" />
                    <h2>Movie App</h2>
                </div>
                <div className="nav__mode">
                    { props.darkMode ?
                        <FontAwesomeIcon icon={faSun} size='2x' color="#fff" onClick={setMode} />
                        :
                        <FontAwesomeIcon icon={faMoon} size='2x' color="#fff" onClick={setMode} />
                    }
                </div>
            </nav>
    )
}

export default Header
