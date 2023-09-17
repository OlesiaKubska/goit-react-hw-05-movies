import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';
import Loader from 'components/Loader/Loader';
import { ListReviewsInfo } from 'components/MovieInfo/MovieInfo.styled';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieReviews = async () => {
            try {
                const data = await getMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieReviews();
    }, [movieId]);

    return (
        <div>
            {loading && <Loader />}
            {error && <p>Error loading reviews</p>}
            {reviews.length === 0 && !loading && !error && <p>We don't have any reviews for this movie</p>}
            <ListReviewsInfo>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h4>Author: {review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ListReviewsInfo>
        </div>
    );
}

export default Reviews;