import React from 'react';
import { ResultLineWrapper, ResultHeaderWrapper } from './result-line-style';

const ResultLine = props => {
	if (props.header) {
		return (
			<ResultHeaderWrapper header={props.header}>
				<div>Word</div>
				<div>Expected</div>
				<div>Your result</div>
			</ResultHeaderWrapper>
		);
	}

	const { word, answeredTranslation, translation } = props.result;
	const isCorrect = translation === answeredTranslation;

	return (
		<ResultLineWrapper isCorrect={isCorrect}>
			<div>{word}</div>
			<div>{translation}</div>
			<div>{answeredTranslation}</div>
		</ResultLineWrapper>
	);
}

export default ResultLine;