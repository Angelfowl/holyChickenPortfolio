import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './app.css';
import searchIcon from './search.svg';


const API_URL = 'https://www.omdbapi.com?apikey=f88defd6';

const movie1 = {
    "Title":"Italian Spiderman",
    "Year":"2007",
    "imdbID":"tt2705436",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}


const App = () => {

    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect (() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder='Search for movies' />
            </div>
            <img
            src={searchIcon}
            alt="search"
            onClick={() => {}}
            />

            {movies?.length > 0
                ? (
                <div className="container">
                    {movies.map((movie) => (
                    <MovieCard movie={movie} />
                    ))}
                </div>
                ) : (

                    <div className="empty">
                        <h2>No Movies Founds</h2>
                    </div>
                )
            },

        </div>
    );
}

export default App;