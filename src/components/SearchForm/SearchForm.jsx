import React, { useState } from 'react';
import { Input, Form, Button } from './SearchForm.styled';
import { searchMovies } from 'service/api';
import MovieList from 'components/MovieList/MovieList';

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (searchQuery.trim() !== '') {
            try {
                const data = await searchMovies(1, searchQuery); 
                setSearchResults(data.results);
            } catch (error) {
                console.error('Error searching movies:', error);
            }
        }
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={handleInputChange}
            />
            <Button type="submit">Search</Button>
            <MovieList movies={searchResults} />
        </Form>
    );
};

export default SearchForm;