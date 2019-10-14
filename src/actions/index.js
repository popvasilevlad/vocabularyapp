import * as ACTIONS from 'constants/action-types';

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