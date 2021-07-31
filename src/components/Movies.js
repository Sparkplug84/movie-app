import React from 'react'

function Movies(props) {
    return (
        <div>
            {
                props.movies.map((movie, index) =>(
                    <div>
                        <img src={movie.poster} alt="movie image" />
                        <h1>{movie.title}</h1>
                        <p>{movie.rating}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Movies
