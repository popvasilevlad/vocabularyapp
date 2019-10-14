import * as ACTIONS from 'constants/action-types';

const initialState = {
	words: [],
	insertError: ''
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
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

		default: 
			return state;
	}	
}

export default rootReducer;