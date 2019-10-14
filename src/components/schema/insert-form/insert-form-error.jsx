import React from 'react';
import { ErrorWrapper } from './insert-form-style';

const InsertFormError = props => (
	<ErrorWrapper>
		{props.text}
	</ErrorWrapper>
);

export default InsertFormError;