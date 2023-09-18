import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItem, StyledLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <List>
            {movies.map((movie) => (
                <ListItem key={movie.id}>
                    <StyledLink to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</StyledLink>
                </ListItem>
            ))}
        </List>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MovieList;