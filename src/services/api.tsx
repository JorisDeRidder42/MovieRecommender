// const API_KEY = import.meta.env.VITE_API_KEY;
// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_KEY = 'bd282f587e44940e9d4cba532f3f6c6c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint:any) => {
    const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
};
