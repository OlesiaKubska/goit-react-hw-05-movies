import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, NavList, NavItem, StyledLink, NavContainer } from './Header.styled';
import { FiFilm } from 'react-icons/fi';

const Header = () => {
    return (
        <StyledHeader>
            <NavContainer>
                <FiFilm size="40px" color="white" />
                <NavList>
                    <NavItem>
                        <StyledLink to="/">Home</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/movies">Movies</StyledLink>
                    </NavItem>
                </NavList>
            </NavContainer>
            <Outlet />
        </StyledHeader>
    );
}

export default Header;