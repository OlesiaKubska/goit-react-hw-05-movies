import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: #333;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
`;

export const NavItem = styled.li`
    margin: 0 1rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #555;
    }
`;