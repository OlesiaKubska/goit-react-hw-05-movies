import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/api';
import Loader from 'components/Loader/Loader';
import { ListCast } from 'components/MovieInfo/MovieInfo.styled';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieCredits = async () => {
            try {
                const data = await getMovieCredits(movieId);
                setCast(data);
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
            <ListCast>
                {cast.map(actor => (
                    <li key={actor.id}>
                        <img
                            src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'path_to_default_image'}
                            // src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                            alt={actor.name}
                            width={200}
                        />
                        {actor.name}
                    </li>
                ))}
            </ListCast>
        </div>
    );
}

export default Cast;