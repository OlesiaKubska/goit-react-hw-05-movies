import React from 'react';
import PropTypes from 'prop-types';
import { MovieInfoContainer, MovieImage, MovieDetails, MovieTitle, UserScore, Overview, Genres } from './MovieInfo.styled';

const MovieInfo = ({ movieDetails }) => {
    const {
        title,
        overview,
        poster_path,
        genres,
        vote_average,
    } = movieDetails || {};

    const userScorePercentage = vote_average * 10;

    // console.log(movieDetails);
    return (
        <>
            {movieDetails && (
                <MovieInfoContainer>
                    <MovieImage
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title}
                    />
                    <MovieDetails>
                        <MovieTitle>{title}</MovieTitle>
                        <UserScore>User Score: {userScorePercentage}%</UserScore>
                        <Overview>Overview</Overview>
                        <p>{overview}</p>
                        <Genres>Genres</Genres>
                        <p>{genres.map((genre) => genre.name).join(", ")}</p>
                    </MovieDetails>
                </MovieInfoContainer>
            )}
        </>
    );
};

MovieInfoContainer.propTypes = {
    movieDetails: PropTypes.shape({
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        genres: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default MovieInfo;