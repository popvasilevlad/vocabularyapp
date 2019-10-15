import styled from 'styled-components';
import { fadedRed, primaryGreen } from 'constants/colors';

export const ResultHeaderWrapper = styled.div`
	margin-top: 50px;
	background-color: rgba(0,0,0,0.1);
	display: flex;
	width: 100%;
	font-size: 16px;
    padding: 10px 0;
    font-weight: 600;
    div:not(:first-child) {
    	border-left: 1px solid rgba(0,0,0,.1);
    }
	div {
		flex-basis: 33%;
		padding: 0 0 0 20px;
	}
`;

export const ResultLineWrapper = styled(ResultHeaderWrapper)`
	color: ${props => props.isCorrect ? primaryGreen : fadedRed};
	background-color: #FFF;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	margin-top: 0;
`;


