import cookie from 'react-cookies';
import React from 'react';
import { connect } from 'react-redux';

const CookiesListener = props => {
	cookie.save('words', props.words);
	cookie.save('quizWords', props.quizWords);
	cookie.save('quizStep', props.quizStep);

	return null;
};

const mapStateToProps = state => {
	return {
		appInitialized: state.appInitialized,
		words: state.words,
		quizWords: state.quizWords,
		quizStep: state.quizStep,
		quizProgress: state.progressScore
	}
}

export default connect(mapStateToProps)(CookiesListener);

export const getDataFromCookies = () => {
	const cookieData = {
		words: cookie.load('words'),
		quizWords: cookie.load('quizWords'),
		quizStep: parseInt(cookie.load('quizStep'))
	};
	Object.keys(cookieData).forEach(key => cookieData[key] === undefined ? delete cookieData[key] : '');

	return cookieData;
}