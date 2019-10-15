import React from 'react';
import PercentageCircleWrapper from './percentage-circle-style';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PercentageCircle = props => (
	<PercentageCircleWrapper>
		<CircularProgressbar
			value={props.score}
			text={`${props.score}%`}
		>
		</CircularProgressbar>
	</PercentageCircleWrapper>
);

export default PercentageCircle;