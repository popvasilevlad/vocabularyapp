import React from 'react';
import Card from 'ui-components/card';
import PercentageCircle from 'ui-components/percentage-circle';
import { connect } from 'react-redux';
import { resetQuiz } from 'actions';
import { Redirect } from 'react-router-dom';
import CenteringWrapper from 'ui-components/centering-wrapper';
import ResultLine from 'ui-components/result-line';
import Button from 'ui-components/button';

const QuizResults = props => {
	if (props.resultPercent === '') {
		return <Redirect to="/" />
	}

	return (
		<>
			<Card>
				<CenteringWrapper>
					<h1>
						{ props.resultPercent < 30 ? 
							'You should learn some more...'
							:
							props.resultPercent < 70 ?
								'Hmmm... Not bad'
								:
								'Watch out! Nerd Alert!'
						}
					</h1>
				</CenteringWrapper>

				<PercentageCircle score={props.resultPercent} />
				<ResultLine header />
				{ props.quizWords.map(item => 
					<ResultLine
						result={item}
						key={item.word}
					/>
				)}
			</Card>
			<CenteringWrapper>
				<Button
					text={'go back'}
					onClick={() => props.resetQuiz()}
				/>
			</CenteringWrapper>
		</>
	);
};

const mapStateToProps = state => {
	return {
		quizWords: state.quizWords,
		resultPercent: state.resultPercent,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		resetQuiz: () => dispatch(resetQuiz())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizResults);