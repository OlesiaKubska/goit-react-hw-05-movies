import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { getMovieDetails } from 'service/api';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const data = await getMovieDetails(movieId);
                setMovieDetails(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    const HOME = "/";
    const goBackLink = location?.state?.from ?? HOME;

    return (
        <div>
            <GoBackBtn path={goBackLink}>Go back</GoBackBtn>
            {loading && <Loader />}
            {error && <Navigate to={HOME} replace />}
            <MovieInfo movieDetails={movieDetails} />
        </div>
    );
}

export default MovieDetails;