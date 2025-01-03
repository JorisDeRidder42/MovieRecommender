import React from 'react';

const MovieCard = ({ movie }: any) => {
    return (
        <div className="card">
            <h3>{movie.title}</h3>
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
            />
             <p>{movie.overview}</p>
        </div>
    );
};

export default MovieCard;
