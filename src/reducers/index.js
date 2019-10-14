import * as ACTIONS from 'constants/action-types';

const initialState = {
	words: [],
	insertError: '',
	loading: false,
	quizWords: [],
	quizStep: 0,
	quizProgress: 0,
	appInitialized: false
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case ACTIONS.INIT_APP_START:
			return {
				...state,
				loading: true
			};

		case ACTIONS.INIT_APP_SUCCEDED:
			return {
				...state,
				...action.payload,
				loading: false,
				appInitialized: true
			};

		case ACTIONS.INIT_APP_FAILED:
			return {
				...state,
				loading: false
			};

		case ACTIONS.INSERT_WORD:
			return {
				...state,
				words: [...state.words, action.payload]
			};

		case ACTIONS.DELETE_WORD:
			return {
				...state,
				words: [...state.words.filter(item => item.word !== action.payload)]
			};

		case ACTIONS.START_QUIZ:
			return {
				...state,
				loading: true
			};
		
		case ACTIONS.START_QUIZ_SUCCEDED:
			return {
				...state,
				quizWords: action.payload,
				loading: false,
				quizStep: 1
			};

		case ACTIONS.START_QUIZ_FAILED:
			return {
				...state,
				generalError: true,
				loading: false
			};

		case ACTIONS.QUIZ_PROCEED:
			return {
				...state,
				quizWords: [...action.payload],
				quizStep: state.quizStep + 1,
				generalError: true,
				loading: false
			};

		default: 
			return state;
	}	
}

export default rootReducer;