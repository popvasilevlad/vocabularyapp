import React, { useState } from 'react';
import Input from 'ui-components/input'; 	
import Button from 'ui-components/button'; 	
import ErrorMessage from 'ui-components/error-message';
import InsertFormWrapper from './insert-form-style';
import { connect } from 'react-redux';
import { insertWord } from 'actions';

const InsertForm = props => {
	const wordInputRef = React.createRef();
	const translationInputRef = React.createRef();
	const [error, updateError] = useState();

	const handleItemAdd = () => {
		const wordInput = wordInputRef.current.value.trim();
		const translationInput = translationInputRef.current.value.trim();

		if (!wordInput) {
			return updateError('Initial word is required.');
		}

		if (!translationInput) {
			return updateError('Word translation is required.');
		}

		if (props.words.some(e => e.word === wordInput)) {
			return updateError('Word already exists in your list.');
		}

		wordInputRef.current.value = '';
		translationInputRef.current.value = '';
		wordInputRef.current.focus();
		updateError('');

		props.insertWord({
			word: wordInput,
			translation: translationInput
		});
	};

	return (
		<>
			<InsertFormWrapper>
				<Input 
					placeholder={'Insert word'}
					size={'medium'}
					ref={wordInputRef}
					onSubmit={() => translationInputRef.current.focus()}
				/>
				<Input 
					placeholder={'Insert translation'}
					size={'medium'}
					ref={translationInputRef}
					onSubmit={() => handleItemAdd()}
				/>
				<Button
					text={'insert'}
					onClick={() => handleItemAdd()}
				/>
			</InsertFormWrapper>
			{error && <ErrorMessage text={error}/>}
		</>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		insertWord: word => dispatch(insertWord(word))
	}
};

const mapStateToProps = state => {
	return {
		words: state.words
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(InsertForm);