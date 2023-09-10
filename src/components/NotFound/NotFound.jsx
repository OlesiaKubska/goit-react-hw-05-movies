import React from 'react';
import { NotFoundContainer, ErrorMessage, ErrorText } from './NotFound.styled';

const NotFound = () => {
    return (
        <NotFoundContainer>
            <ErrorMessage>404</ErrorMessage>
            <ErrorText>Page not found</ErrorText>
        </NotFoundContainer>
    );
}

export default NotFound;