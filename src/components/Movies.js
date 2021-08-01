import React from 'react'
import './Movies.css'

function Movies(props) {
    return (
        <div className="movies__container">
            {
                props.movies.map((movie, index) =>(
                    <div className="movie">
                        <img className="movie__image" src={movie.poster} alt="movie image" />
                        <div className="movie__info">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias at aspernatur nihil dolores iste, exercitationem in officia rem odit ipsam velit quam, maiores quod ducimus laborum voluptatem veritatis tenetur quidem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias at aspernatur nihil dolores iste, exercitationem in officia rem odit ipsam velit quam, maiores quod ducimus laborum voluptatem veritatis tenetur</p>
                        </div>
                        <div className="movie__details">
                            <h3>{movie.title}</h3>
                            <p>{movie.rating}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Movies
