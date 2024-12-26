import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';



const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            const popularMovies = await fetchMovies('/movie/popular');
            setMovies(popularMovies);
        };
        loadMovies();
    }, []);

    return (
        <div className="home-page">
            <Container maxWidth="lg">
            <h1>Popular Movies</h1>
                <Card  className="movie-grid">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </Card>
            </Container>
        </div>
    );
};

export default Home;
