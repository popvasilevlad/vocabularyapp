import React from 'react';
import CenteringLayer from './centering-wrapper-style';

const CenteringWrapper = props => (
	<CenteringLayer>
		{props.children}
	</CenteringLayer>
);

export default CenteringWrapper;