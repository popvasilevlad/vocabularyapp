import styled from 'styled-components';
import { primaryBlue, primaryBlueActive } from 'constants/colors';

const dropdownSizesMap = {
    large: '300px',
    medium: '190px',
    small: '100px'
};

const StyledDropdown = styled.select`
	width: ${props => dropdownSizesMap[props.size] || 'auto' };
	cursor: pointer;
	border: 1px solid ${primaryBlue};
	border-radius: 30px;
	padding: 0 20px;
	height: 30px;
	color: ${primaryBlue};
	font-family: 'Quicksand', sans-serif;
	&:focus, &:active {
		outline: 0;
		border: 1px solid ${primaryBlueActive};
		border-radius: 15px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
`;

export default StyledDropdown;