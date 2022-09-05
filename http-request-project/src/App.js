import { Fragment, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const movieData = data.results.map(movieResult => {
          return {
            id: movieResult.episode_id,
            title: movieResult.title,
            releaseDate: movieResult.release_date,
            openingText: movieResult.opening_crawl,
          };
        });
        setMovies(movieData);
      });
  }

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </Fragment>
  );
}

export default App;
