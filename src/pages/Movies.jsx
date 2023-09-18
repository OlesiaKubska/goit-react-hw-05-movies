import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/api';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") ?? '';
    
    useEffect(() => {
        const fetchSearchMovies = async () => {
            try {
                const data = await searchMovies(query);
                setMovies(data.results || []);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchMovies();
    }, [query]);

    const handleSubmit = value => {
        setSearchParams({ q: value });
    }

    return (
        <div>
            {error && <h2>Error loading cast</h2>}
            {loading && <Loader />}
            <SearchForm onSubmit={handleSubmit} />
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}

export default Movies;