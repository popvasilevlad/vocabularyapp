import * as ACTIONS from 'constants/action-types';
import { getDataFromCookies } from 'utils/cookies';

export const initAppStart = payload => {
	return {
		type: ACTIONS.INIT_APP_START
	}
};

export const initAppSucceded = payload => {
	return {
		type: ACTIONS.INIT_APP_SUCCEDED,
		payload
	}
};

export const initAppFailed = payload => {
	return {
		type: ACTIONS.INIT_APP_FAILED
	}
};

export const insertWord = payload => {
	return {
		type: ACTIONS.INSERT_WORD,
		payload
	}
};

export const deleteWord = payload => {
	return {
		type: ACTIONS.DELETE_WORD,
		payload
	}
};

export const startQuiz = payload => {
	return {
		type: ACTIONS.START_QUIZ,
		payload
	}
};

export const startQuizSucceded = payload => {
	return {
		type: ACTIONS.START_QUIZ_SUCCEDED,
		payload
	}
};

export const startQuizFailed = payload => {
	return {
		type: ACTIONS.START_QUIZ_FAILED
	}
};

export const quizProceed = payload => {
	return {
		type: ACTIONS.QUIZ_PROCEED,
		payload
	};
};

export const quizSubmitStart = payload => {
	return {
		type: ACTIONS.QUIZ_SUBMIT_START,
		payload
	};
};

export const quizSubmitSucceded = payload => {
	return {
		type: ACTIONS.QUIZ_SUBMIT_SUCCEDED,
		payload
	};
};

export const resetQuiz = payload => {
	return {
		type: ACTIONS.RESET_QUIZ
	};
};

export const quizProceedWord = (quizWords, step) => {
	return dispatch => {
		if (step === quizWords.length) {
			dispatch(quizSubmitStart(quizWords));

			const resultScore = quizWords.reduce((count, current) => {
				return current.translation === current.answeredTranslation ? ++count : count
			}, 0);
			const resultPercent = Math.floor(resultScore / quizWords.length * 100);
			dispatch(quizSubmitSucceded({
				quizWords,
				resultPercent
			}))
		} else {
			dispatch(quizProceed(quizWords));
		}
	}
}

export const initApp = () => {
	return dispatch => {
		dispatch(initAppStart());
		try {
			const data = getDataFromCookies();
			dispatch(initAppSucceded(data));
		} catch (err) {
			console.log(err)
			dispatch(initAppFailed());
		}
	}
}

export const takeQuiz = words => {
	return dispatch => {
		dispatch(startQuiz());

		try {
			let randomWords = [];
			let initialWords = words.slice();

			for (let i = 0; i < 3; i++) {
				let randomIndex = Math.floor(Math.random() * initialWords.length);
				randomWords.push(initialWords[randomIndex]);
				initialWords.splice(randomIndex, 1);
			}
			dispatch(startQuizSucceded(randomWords));
		} catch (err) {
			dispatch(startQuizFailed());
		}
	}
};

