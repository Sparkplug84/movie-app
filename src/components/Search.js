import React, {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'

function Search({searchInput, setSearchInput}) {
    const [expand, setexpand] = useState(false)
    const searchRef = useRef();

    const expandSearch = () => {
        // Function to toggle the search input expand feature
        setexpand(!expand)
        searchRef.current.focus()
    }

    return (
        <div className="search__container">
            <div className={`search ${expand ? 'active' : null}`}>
                <input 
                    type="text" 
                    className="search__input" 
                    placeholder="Search for a movie..." 
                    ref={searchRef} 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)} 
                />
                <button className="search__button" onClick={expandSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default Search
