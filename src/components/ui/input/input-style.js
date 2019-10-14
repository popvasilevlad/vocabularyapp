import styled from 'styled-components';
import { primaryBlue, primaryBlueActive } from 'constants/colors';

const inputSizesMap = {
    large: '300px',
    medium: '220px',
    small: '100px',
    full: '100%'
};

const StyledInput = styled.input`
    width: ${props => inputSizesMap[props.size] || 'auto'}
    font-family: 'Quicksand', sans-serif;
    border: 1px solid ${primaryBlue};
    color: #4c7b8c;
    padding: 0 30px;
    border-radius: 40px;
    height: 35px;
    box-sizing: border-box;
    &:focus {
        outline: 0;
        border: 1px solid ${primaryBlueActive};
    }
    &::placeholder {
        color: #78B2C6;
        font-family: 'Quicksand', sans-serif;
    }
`;

export default StyledInput;