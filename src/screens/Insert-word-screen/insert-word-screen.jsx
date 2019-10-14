import React, { useState } from 'react';
import Button from 'ui-components/button';
import InsertForm from 'schema-components/insert-form';
import ErrorMessage from 'ui-components/error-message';
import VocabularyTable from 'schema-components/vocabulary-table';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const InsertWordScreen = props => {
    const [error, setError] = useState('');
    const [goTo, setRedirect] = useState('');

    const handleQuizStart = () => {
        if (props.words.length < 2) {
            return setError('You have to add 20 words to the vocabulary before starting a test')
        }  else {
            return setRedirect('quiz');
        }
    };

    return (
        <>
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
        words: state.words
    }
};

export default connect(mapStateToProps)(InsertWordScreen);
