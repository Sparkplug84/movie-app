import React, {useEffect, useState} from 'react';
import Movies from './components/Movies'
import './App.css';

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const MOVIE_API = "https://www.omdbapi.com/?s=back+to+the+future&apikey=aa19cb4"
    const res = await fetch(MOVIE_API)
    const data = await res.json()
    console.log(data)
    setMovies(data.Search)

  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Movies movies={movies} />
      </div>
    </div>
  );
}

export default App;
