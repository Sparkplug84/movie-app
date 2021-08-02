import React, {useEffect, useState} from 'react';
import Movies from './components/Movies'
import Search from './components/Search'
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const getMovies = async (searchInput) => {
    // Function to call the API dynamically with the search input and save the results in a variable
    const MOVIE_API = `https://www.omdbapi.com/?s=${searchInput}&apikey=aa19cb4`
    const res = await fetch(MOVIE_API)
    const data = await res.json()
    if(data.Search) {
      setMovies(data.Search)
    }
  }

  useEffect(() => {
    // Function to call the API every time the application loads
    getMovies(searchInput)
  }, [searchInput])

  return (
    <div className="App">
      <div className="container">
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <Movies movies={movies} />
      </div>
    </div>
  );
}

export default App;
