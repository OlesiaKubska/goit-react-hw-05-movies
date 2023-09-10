import React from 'react';
import { StyledHeader, NavList, NavItem, StyledLink } from './Header.styled';

const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <NavList>
                    <NavItem>
                        <StyledLink to="/">Home</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/movies">Movies</StyledLink>
                    </NavItem>
                </NavList>
            </nav>
        </StyledHeader>
    );
}

export default Header;