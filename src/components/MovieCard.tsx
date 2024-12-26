import React from 'react';

const MovieCard = ({ movie }: any) => {
    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
            />
        </div>
    );
};

export default MovieCard;
