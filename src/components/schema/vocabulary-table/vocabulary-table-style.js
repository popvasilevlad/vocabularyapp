import styled from 'styled-components';
import { fadedRed } from 'constants/colors';

export const StyledVocabularyTableLine = styled.div`
	display: flex;
	width: 100%;
	font-size: 16px;
    padding: 10px 0;

    div:first-child {
    	border-right: 1px solid rgba(0,0,0,.1);
    }
	div:last-child {
		color: ${fadedRed};
		font-size: 12px;
		flex-basis: 10%;
		cursor: pointer;
		padding: 0;
		&:hover {
			text-decoration: underline;
		}
	}
	div {
		flex-basis: 45%;
		padding: 0 0 0 20px;
	}
`;