import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import './Movie.css'

function Movie({title,poster,year,imdbID}) {
    const [movieInfo, setMovieInfo] = useState(false)
    const [movieDetails, setMovieDetails] = useState({})

    const getMovieDetails = async () => {
        // Function to call the API to retrieve further movie details
        const MOVIE_API_DETAILS = `https://www.omdbapi.com/?i=tt1201607&apikey=aa19cb4`
        const res = await fetch(MOVIE_API_DETAILS)
        const details = await res.json()
        if(details) {
          setMovieDetails(details)
        }
      }

    useEffect(() => {
        // Function to call the API function above on loading
        getMovieDetails()
    }, [])
      

    const revealInfo = () => {
        // Function to toggle the movie info display
        setMovieInfo(!movieInfo)
    }

    return (
        <div key={imdbID} className="movie">
            <img className="movie__image" src={poster !== "N/A" ? poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} alt={title} />
            <div className={`movie__info ${movieInfo ? 'movie__infoReveal' : null}`}>
                <p><strong>Movie Title:</strong></p>
                <p>{title}</p>
                <p><strong>Release Year:</strong></p>
                <p>{year}</p>
                <p><strong>IMDB ID:</strong></p>
                <p>{imdbID}</p>
                <a href={`https://www.imdb.com/title/${imdbID}/`} target="_blank" rel="noreferrer">View details on <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" alt="IMDB"></img></a>
            </div>
            <div className="movie__details">
                <h4>{title}</h4>
                <div className="movie__infoIcon" onClick={revealInfo}>
                    <FontAwesomeIcon icon={faInfo} />
                </div>
            </div>
        </div>
    )
}

export default Movie
