import styled from 'styled-components';
import { whiteGray, fadedGray } from 'constants/colors';

const Container = styled.div`
	margin: 20px 0;
	background-color: #FFF;
	border-radius: 10px;
	font-size: 12px;
	color: ${fadedGray};
	font-weight: 500;
	padding: 20px;
	border: 1px solid ${whiteGray};
	display: flex;
	flex-direction: column;
`;

export default Container;
