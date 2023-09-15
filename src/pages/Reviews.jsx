import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieReviews = async () => {
            try {
                const data = await getMovieReviews(movieId);
                setReviews(data.results);
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
            <h2>Reviews</h2>
            {loading && <Loader />}
            {error && <p>Error loading reviews</p>}
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h4>Author: {review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Reviews;