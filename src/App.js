import React from 'react';
import Card from 'ui-components/card';
import Button from 'ui-components/button';
import InsertForm from 'schema-components/insert-form';
import VocabularyTable from 'schema-components/vocabulary-table';

const App = () => {
    return (
        <div>
        	<InsertForm />
        	<VocabularyTable />
        	<Button text={'start test'}/>
        </div>
    )
};

export default App;