import React from 'react'
import Movie from './Movie'
import './Movies.css'

function Movies(props) {

    const resetInput = () => {
        // Function to clear the search input field and reset the movies array to empty
        props.setSearchInput("");
        props.setMovies([])
      };

    return (
        <>
            { props.searchInput ?
                <div className="movies__results">
                    <p className={`${props.darkMode ? null : 'movies__lightMode'}`}>{`${props.movies.length} results found for "${props.searchInput}"`}</p>
                    <button onClick={resetInput}>Clear</button>
                </div>
            : null
            }
            <div className="movies__container">
                {
                    props.movies.map((movie) =>(
                        <Movie key={movie.imdbID} title={movie.Title} poster={movie.Poster} imdbID={movie.imdbID} year={movie.Year} isLoading={props.isLoading} />
                    ))
                }
            </div>
        </>
    )
}

export default Movies
