import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GoBackButton } from './GoBackBtn.styled';

export const GoBackBtn = ({ path, children }) => {
    return (
        <GoBackButton to={path}>
            <AiOutlineArrowLeft />
            {children}
        </GoBackButton>
    );
};