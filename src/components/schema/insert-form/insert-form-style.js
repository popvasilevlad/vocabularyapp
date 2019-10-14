import styled from 'styled-components';
import { fadedRed } from 'constants/colors';

export const InsertFormWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const ErrorWrapper = styled.div`
	padding: 10px 0 0;
	text-align: center;
	font-size: 12px;
	color: ${fadedRed}
`;