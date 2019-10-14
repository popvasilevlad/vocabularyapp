import styled from 'styled-components';
import { primaryBlue, fadedBlue } from 'constants/colors';

const StyledButton = styled.button`
    display: block;
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
    color: white;
    text-transform: uppercase;
    border-radius: 50px;
    width: 150px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    outline: 0;
    border: 0;
    background-color: ${fadedBlue};
    margin: ${props => props.centered ? '0 auto': null};
    &:hover {
        background-color: ${primaryBlue};
    }
`;

export default StyledButton;