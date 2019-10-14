import React from 'react';
import StyledButton from './button-style';

const Button = props => (
    <StyledButton
        onClick={props.onClick}
    >
        {props.text}
    </StyledButton>
);

export default Button;