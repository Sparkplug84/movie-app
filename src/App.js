import React, {useEffect, useState} from 'react';
import Movies from './components/Movies'
import Search from './components/Search'
import Header from './components/Header';
import Movie from './components/Movie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [darkMode, setDarkMode] = useState(true)
  const featuredMovies = (['tt1675434', 'tt0758758', 'tt0114369', 'tt0119488', 'tt0488120'])
  // Randomly display one of five featured movies above on landing at webpage
  var featuredMovie = featuredMovies[Math.floor(Math.random()*featuredMovies.length)];

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
    if (searchInput === '') {
      setMovies([])
    }
  }, [searchInput])

  return (
    <>
      <style>{`body {background-color:${darkMode ? null : 'rgb(218, 218, 218)'}`}</style>
      <div className="App">
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="container">  
          <Search searchInput={searchInput} setSearchInput={setSearchInput} setMovies={setMovies} />
          { searchInput ? 
            <Movies movies={movies} searchInput={searchInput} setSearchInput={setSearchInput} setMovies={setMovies} darkMode={darkMode} />
            :
            <>
              <div className={`featured__movie ${darkMode ? null : 'text__black'}`}>
                <h2>Featured Movie</h2>
              </div>
              <Movie featuredMovie={featuredMovie} />
            </>
          }
        </div>
      </div>
    </>
  );
}

export default App;
