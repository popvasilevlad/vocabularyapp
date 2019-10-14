import React from 'react';
import StyledCard from './card-style';

const {
	Container
} = StyledCard;

const Card = props => {
	console.log(props)
	return (
	<Container>
		{props.children}
	</Container>
	);
};

export default Card;