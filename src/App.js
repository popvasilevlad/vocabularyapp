import React from 'react';
import InsertWordScreen from 'screens/insert-word-screen';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={InsertWordScreen} />
                    <Route path="/quiz" component={() => <div>quiz</div>} />
                    <Route component={() => <div>not found</div>} />
                </Switch>
            </Router>
        </>
    )
};

export default App;