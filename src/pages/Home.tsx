import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';



const Home = () => {
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        loadMovies();
    }, []);


    const loadMovies = async () => {
    try {
      const popularMovies = await fetchMovies('/movie/popular');
      setMovies(popularMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSwipe = (direction) => {
    if (direction === "like") {
      console.log("Liked:", movies[currentIndex].title);
    } else {
      console.log("Disliked:", movies[currentIndex].title);
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

    return (
        <>
        <div className="card-container">
        {movies
            .slice(currentIndex, currentIndex + 3) // Show only the top 3 cards
            .map((movie, index) => (
            <div
                key={movie.id}
                className="card"
                style={{
                zIndex: 3 - index, // Top card has the highest z-index
                }}
            >
                <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='card-image'
                />
                <div className="card-content">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                </div>
            </div>
            ))}
        </div>
        <div className="buttons">
            <button className="dislike" onClick={() => handleSwipe("dislike")}>
            ❌
            </button>
            <button className="like" onClick={() => handleSwipe("like")}>
            ❤️
            </button>
        </div>
        </>
    );
};

export default Home;
