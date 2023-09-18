import React, { useState } from 'react';
import { Input, Form, Button } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            return alert("Please enter a search term.");
        }
        onSubmit(searchQuery);
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
        </Form>
    );
};

export default SearchForm;