import React from 'react';
import PropTypes from 'prop-types';
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

GoBackBtn.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node
};