import React from 'react';
import { StyledVocabularyTableLine } from './vocabulary-table-style'

const VocabularyTableLine = props => (
	<StyledVocabularyTableLine>
		<div>{props.word}</div>
		<div>{props.translation}</div>
		<div
			onClick={() => props.handleDelete(props.word)}
		>
			× remove
		</div>
	</StyledVocabularyTableLine>
);


export default VocabularyTableLine;