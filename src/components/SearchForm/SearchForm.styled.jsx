import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 30px;
`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid #000080;
    border-radius: 4px;
    font-size: 14px;
    width: 300px;
`;

export const Button = styled.button`
    background-color: #000080;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    margin-left: 20px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;