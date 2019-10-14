import React from 'react';
import StyledSpinner from './spinner-style';

const Spinner = () => (
	<SpinnerWrapper>
		<SpinnerAnimation />
	</SpinnerWrapper>
);
const { SpinnerWrapper, SpinnerAnimation } = StyledSpinner;

export default Spinner;