import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
    list-style-type: square;
    padding-left: 40px;
    padding-top: 20px;
    margin: 0;
`;

export const ListItem = styled.li`
    margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
    color: #000080;

    &:hover {
        text-decoration: underline;
        color: #007bff;
    }
`;

export const ListReviews = styled.ul`
    padding-left: 40px;
    padding-bottom: 20px;
    margin: 0;
`;

export const ListItemReviews = styled.li`
    margin-bottom: 10px;
`;