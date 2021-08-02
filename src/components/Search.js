import React, {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'

function Search() {
    const [expand, setexpand] = useState(false)
    const searchRef = useRef();

    const expandSearch = () => {
        setexpand(!expand)
        searchRef.current.focus()
    }

    return (
        <div className="search__container">
            <div className={`search ${expand ? 'active' : null}`}>
                <input type="text" className="search__input" placeholder="Search for a movie..." ref={searchRef}/>
                <button className="search__button" onClick={expandSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default Search
