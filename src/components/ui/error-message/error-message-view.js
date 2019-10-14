import React from 'react';
import ErrorWrapper from './error-message-style';

const ErrorMessage = props => (
	<ErrorWrapper>
		{props.text}
	</ErrorWrapper>
);

export default ErrorMessage;