import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'service/api';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { Container } from 'components/App.styled';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const data = await getTrendingMovies();
                setMovies(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
        <Container>
            <h2>Trending today</h2>
            {error && <h2>Trending today</h2>}
            {loading && <Loader />}
            <MovieList movies={movies} />
        </Container>
    );
}

export default Home;