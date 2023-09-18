import React, { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation, Navigate } from 'react-router-dom';
import { getMovieDetails } from 'service/api';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { InfoContainer, ListItemReviews, ListReviews } from 'components/MovieInfo/MovieInfo.styled';

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

    const goBackLink = location?.state?.from || "/";

    return (
        <div>
            <GoBackBtn path={goBackLink}>Go back</GoBackBtn>
            {loading && <Loader />}
            {error && <Navigate to={"/"} replace />}
            <MovieInfo movieDetails={movieDetails} />
            
            <InfoContainer>
                <h2>Additional information</h2>
                <ListReviews>
                    <ListItemReviews>
                        <Link to="cast">Cast</Link>
                    </ListItemReviews>
                    <ListItemReviews>
                        <Link to="reviews">Reviews</Link>
                    </ListItemReviews>
                </ListReviews>
            </InfoContainer>

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default MovieDetails;