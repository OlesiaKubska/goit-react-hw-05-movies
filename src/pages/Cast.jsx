import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/api';
import Loader from 'components/Loader/Loader';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieCredits = async () => {
            try {
                const data = await getMovieCredits(movieId);
                setCast(data.cast);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieCredits();
    }, [movieId]);
    
    return (
        <div>
            {loading && <Loader />}
            {error && <p>Error loading cast</p>}
            <ul>
                {cast.map(actor => (
                    <li key={actor.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                            alt={actor.name}
                            width={200}
                        />
                        {actor.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cast;