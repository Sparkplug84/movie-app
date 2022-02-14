import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Movie.css'

function Movie({title,imdbID,featuredMovie,isLoading}) {
    const [movieInfo, setMovieInfo] = useState(false)
    const [movieDetails, setMovieDetails] = useState({})

    const getMovieDetails = async () => {
        // Function to call the API to retrieve further movie details from the imdbID or featured movie ID
        const MOVIE_API_DETAILS = `https://www.omdbapi.com/?i=${imdbID ? imdbID : featuredMovie}&apikey=aa19cb4`
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
        // Function to show additional movie info
        setMovieInfo(true)
    }
    
    const collapseInfo = () => {
        // Function to collapse additional movie info
        setMovieInfo(false)
    }

    return (
        <>
            <div key={imdbID} className="movie" onClick={revealInfo}>
                {
                    isLoading ? <div className='spinner'></div> :
                    <img className="movie__image" src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} alt={title} />
                }
                <div className="movie__details">
                    <div className="movie__title">
                        <h4>{movieDetails.Title}</h4>
                        <div className="movie__infoIcon">
                            <FontAwesomeIcon icon={faInfo} />
                        </div>
                    </div>
                    <div className="movie__title">
                        <small><FontAwesomeIcon className="movie__starIcon" icon={faStar} color="#ffd230"/>{movieDetails.imdbRating}</small>
                        <small>{movieDetails.Year}</small>
                    </div>
                </div>
                
            </div>

            <div className={`movie__popup ${movieInfo ? 'movie__infoReveal' : null}`}>
                <div className="movie__popupContainer">
                    <div className="movie__popupHeader">
                        <h3>Movie Details</h3>
                        <FontAwesomeIcon className="icon" icon={faTimes} size = '2x' onClick={collapseInfo}/>
                    </div>
                    
                    <table>
                        <tbody>
                            <tr className="movie__infoContainer">
                                <td className="movie__infoCategories"><strong>Movie Title:</strong></td>
                                <td className="movie__infoDetails">{movieDetails.Title}</td>
                            </tr>
                            <tr className="movie__infoContainer">
                                <td className="movie__infoCategories"><strong>Release Year:</strong></td>
                                <td className="movie__infoDetails">{movieDetails.Year}</td>
                            </tr>
                            <tr className="movie__infoContainer">
                                <td className="movie__infoCategories"><strong>Runtime:</strong></td>
                                <td className="movie__infoDetails">{movieDetails.Runtime}</td>
                            </tr>
                            <tr className="movie__infoContainer">
                                <td className="movie__infoCategories"><strong>IMDB rating:</strong></td>
                                <td className="movie__infoDetails">{movieDetails.imdbRating}</td>
                            </tr>
                            <tr className="movie__infoContainer">
                                <td className="movie__infoCategories"><strong>Director:</strong></td>
                                <td className="movie__infoDetails">{movieDetails.Director}</td>
                            </tr>
                            <tr className="movie__infoContainer">
                                <td className="movie__infoCategories"><strong>Cast:</strong></td>
                                <td className="movie__infoDetails">{movieDetails.Actors}</td>
                            </tr>
                            <tr className="movie__infoContainer">
                                <td className="movie__infoCategories"><strong>Storyline:</strong></td>
                                <td className="movie__infoDetails">{movieDetails.Plot}</td>
                            </tr>
                        </tbody>
                    </table>
                    { imdbID ?
                        <div className="movie__link">
                            <a href={`https://www.imdb.com/title/${imdbID}/`} target="_blank" rel="noreferrer">View details on <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" alt="IMDB"></img></a>
                        </div>
                        :
                        null
                    }
                </div>
                
            </div>
            <div className={`modal ${movieInfo ? 'modal__display' : null}`} onClick={collapseInfo}></div>
        </>
    )
}

export default Movie
