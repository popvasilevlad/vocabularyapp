import React from 'react';
import Container from './card-style';

const Card = props => (
	<Container>
		{props.children}
	</Container>
);

export default Card;