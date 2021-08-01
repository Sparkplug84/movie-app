import React from 'react'
import './Movies.css'

function Movies(props) {
    return (
        <div className="movies__container">
            {
                props.movies.map((movie, index) =>(
                    <div className="movie">
                        <img className="movie__image" src={movie.Poster !== "N/A" ? movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} alt={movie.Title} />
                        <div className="movie__info">
                            <p><strong>Movie Title:</strong></p>
                            <p>{movie.Title}</p>
                            <p><strong>Release Year:</strong></p>
                            <p>{movie.Year}</p>
                            <p><strong>IMDB ID:</strong></p>
                            <p>{movie.imdbID}</p>
                            <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank">View details on <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"></img></a>
                        </div>
                        <div className="movie__details">
                            <h3>{movie.Title}</h3>
                            <p>{movie.Rating}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Movies
