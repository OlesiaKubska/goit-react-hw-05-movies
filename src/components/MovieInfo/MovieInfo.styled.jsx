import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 30px;
    color: #000080;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #000080;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

export const MovieImage = styled.img`
    max-width: 300px;
    height: auto;
    margin-right: 30px;
`;

export const MovieDetails = styled.div`
    flex: 1;
`;

export const MovieTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 40px;
`;

export const UserScore = styled.p`
    font-size: 18px;
    margin-bottom: 40px;
`;

export const Overview = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
`;

export const Genres = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
`;