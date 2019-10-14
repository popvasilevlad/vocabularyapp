import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid #78B2C6;
    color: #4c7b8c;
    padding: 0 30px;
    border-radius: 40px;
    height: 40px;
    &:focus {
        outline: 0;
        border: 1px solid #5d8694;
    }
    &::placeholder {
        color: #78B2C6;
    }
`;

export default StyledInput;