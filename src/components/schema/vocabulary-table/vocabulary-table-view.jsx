import React from 'react';
import Card from 'ui-components/card';
import Button from 'ui-components/button';
import VocabularyTableLine from './vocabulary-table-line';
import { connect } from 'react-redux';
import { deleteWord } from 'actions';

const SearchBar = props => (
    <Card>
        {
            props.words.map(item => (
                <VocabularyTableLine
                    word={item.word}
                    translation={item.translation}
                    key={item.word}
                    handleDelete={word => props.deleteWord(word)}
                />
            ))
        }
        { !props.words.length && <div>No elements added yet.</div> }
    </Card>
);

const mapStateToProps = state => {
    return {
        words: state.words
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteWord: word => dispatch(deleteWord(word))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);