import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center; // вирівнює елементи по вертикалі
    gap: 15px;
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    gap: 15px;
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