import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { quizProceed } from 'actions';
import ProgressBar from 'ui-components/progress-bar';
import Card from 'ui-components/card';
import CenteringWrapper from 'ui-components/centering-wrapper';
import Input from 'ui-components/input';
import Button from 'ui-components/button';
import ErrorMessage from 'ui-components/error-message';

const QuizScreen = props => {
	if (!props.quizWords.length) {
		return <Redirect to='/' />
	};

	if (props.quizStep > props.quizWords.length) {
		return <Redirect to='results' />
	};

	const [error, updateError] = useState();
	const answerInputRef = React.createRef();
	const entry = props.quizWords[props.quizStep - 1];
	const finishedPercentage = Math.floor((props.quizStep - 1) / props.quizWords.length * 100);

	useEffect(() => {
		answerInputRef.current.value = '';
		answerInputRef.current.focus();
	});

	const handleSubmit = () => {
		const answerInput = answerInputRef.current.value.trim();
		if (!answerInput) {
			return updateError('Oh c\'mon! Try at least inserting something random, you never know')
		}

		const newQuizWords = props.quizWords.slice();
		newQuizWords[props.quizStep - 1].translation = answerInput;
		props.quizProceed(newQuizWords);
	};

	return (
		<Card>
			<CenteringWrapper>
				<h1>Let's see what you've got!</h1>
			</CenteringWrapper>
			<CenteringWrapper>
				<ProgressBar percentage={finishedPercentage} />
			</CenteringWrapper>
			<div>
				<br/>
				<br/>
				<h2>{props.quizStep}. What's the translation of the word "{entry.word}"?</h2>
				<Input
					size={'large'}
					placeholder={'Insert translation'}
					ref={answerInputRef}
					onSubmit={() => handleSubmit()}
				/>
				<br/>
				<br/>
				<br/>
				{error && <ErrorMessage text={error}/>}
				<CenteringWrapper>
					<Button
						text={'Continue'}
						onClick={() => handleSubmit()}
					/>
				</CenteringWrapper>
			</div>

		</Card>
	);
};

const mapStateToProps = state => {
	return {
		quizStep: state.quizStep,
		quizWords: state.quizWords
	}
}

const mapDispatchToProps = dispatch => {
	return {
		quizProceed: entry => dispatch(quizProceed(entry))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
