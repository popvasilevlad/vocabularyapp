import React, { useState } from 'react';
import StyledInput from './input-style';

const Input =  React.forwardRef((props, ref) => {
	const [ value, handleEdit ] = useState(props.value);

	const handleKeyDown = e => {
		if (e.keyCode === 13 && props.onSubmit) props.onSubmit(value);
	}

	return (
	    <StyledInput
	        placeholder={props.placeholder}
	        size={props.size}
	        ref={ref}
	        value={value}
	        onKeyDown={e => handleKeyDown(e)}
	    />
	)
});

export default Input;