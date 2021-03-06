import React, { useState } from 'react';
import Button from 'ui-components/button';
import ErrorMessage from 'ui-components/error-message';
import Spiner from 'ui-components/spinner';
import InsertForm from 'schema-components/insert-form';
import VocabularyTable from 'schema-components/vocabulary-table';
import { takeQuiz, init } from 'actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const VocabularyScreen = props => {
    const [error, setError] = useState('');
    const [goTo, setRedirect] = useState('');

    const handleQuizStart = () => {
        if (props.words.length < 20) {
            return setError('You have to add 20 words to the vocabulary before starting a test')
        }  else {
            props.takeQuiz(props.words);
            
            return setRedirect('quiz');
        }
    };

    return (
        <>
            { !!props.quizStep && <Redirect to={'quiz'} />}
            <InsertForm />
            <VocabularyTable />
            { !!error && <ErrorMessage text={error} /> }
            { !!props.words.length && <div>
                    <Button
                        text={'start test'}
                        onClick={() => handleQuizStart()}
                        centered={true}
                    />
                </div>
            }
            { !!goTo && <Redirect to={goTo} />}
        </>
    );
};

const mapStateToProps = state => {
    return {
        words: state.words,
        loading: state.loading,
        quizStep: state.quizStep
    }
};

const mapDispatchToProps = dispatch => {
    return {
        takeQuiz: words => dispatch(takeQuiz(words))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyScreen);
