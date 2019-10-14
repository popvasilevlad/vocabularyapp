import React from 'react';
import StyledButton from './button-style';

const Button = props => (
    <StyledButton
        onClick={() => props.onClick()}
        centered={props.centered}
    >
        {props.text}
    </StyledButton>
);

export default Button;