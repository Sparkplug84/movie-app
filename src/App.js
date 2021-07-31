import React, {useState} from 'react';
import Movies from './components/Movies'
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    // Temporary hard coded movie to test Movie component
    {
        "title": "Forrest Gump",
        "rating": 8.5,
        "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
    }
  ])

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
