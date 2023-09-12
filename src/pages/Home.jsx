import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'service/api';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const data = await getTrendingMovies();
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingMovies();
    }, []);

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {error && <h2>Trending today</h2>}
            {loading && <Loader />}
            <MovieList movies={movies} />
        </div>
    );
}

export default Home;