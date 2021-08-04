import React, {useEffect, useState} from 'react';
import Movies from './components/Movies'
import Search from './components/Search'
import Header from './components/Header';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [darkMode, setDarkMode] = useState(true)

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
    if (searchInput == '') {
      setMovies([])
    }
  }, [searchInput])

  return (
    <>
      <style>{`body {background-color:${darkMode ? null : 'rgb(240, 240, 240)'}`}</style>
      <div className="App">
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="container">  
          <Search searchInput={searchInput} setSearchInput={setSearchInput} setMovies={setMovies} />
          <Movies movies={movies} searchInput={searchInput} setSearchInput={setSearchInput} setMovies={setMovies} />
        </div>
      </div>
    </>
  );
}

export default App;
