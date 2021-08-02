import React from 'react'
import Movie from './Movie'
import './Movies.css'

function Movies(props) {

    return (
        <div className="movies__container">
            {
                props.movies.map((movie) =>(
                    <Movie title={movie.Title} poster={movie.Poster} imdbID={movie.imdbID} year={movie.Year} />
                ))
            }
        </div>
    )
}

export default Movies
