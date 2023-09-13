import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackButton = styled(Link)`
    color: #000080;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;

    svg {
        fill: #000080;
        margin-right: 8px;
        width: 16px;
        height: 16px;
    }

    &:hover
    &:focus {
        background-color: #0056b3;
    }
`;