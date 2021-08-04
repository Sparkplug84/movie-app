import React from 'react'
import Movie from './Movie'
import './Movies.css'

function Movies(props) {

    const resetInput = () => {
        // Function to clear
        props.setSearchInput("");
        props.setMovies([])
      };

    return (
        <>
            { props.searchInput ?
                <div className="movies__results">
                    <p>{`${props.movies.length} results found for "${props.searchInput}"`}</p>
                    <button onClick={resetInput}>Clear Search</button>
                </div>
            : null
            }
            <div className="movies__container">
                
                
                {
                    props.movies.map((movie) =>(
                        <Movie key={movie.imdbID} title={movie.Title} poster={movie.Poster} imdbID={movie.imdbID} year={movie.Year} />
                    ))
                }
            </div>
        </>
    )
}

export default Movies
