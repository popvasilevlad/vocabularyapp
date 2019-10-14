import React from 'react';
import ProgressBarWrapper from './progress-bar-style';

const ProgressBar = props => (
	<ProgressBarWrapper percentage={props.percentage}>
		{props.percentage}
	</ProgressBarWrapper>
);

export default ProgressBar;