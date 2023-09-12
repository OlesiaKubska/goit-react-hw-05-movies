import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, StyledLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
    return (
        <List>
            {movies.map((movie) => (
                <ListItem key={movie.id}>
                    <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
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