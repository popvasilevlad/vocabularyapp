import React, { Component } from 'react';
import Spinner from 'ui-components/spinner';
import InsertWordScreen from 'screens/insert-word-screen';
import QuizScreen from 'screens/quiz-screen';
import QuizResults from 'screens/quiz-results';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CookieListener from 'utils/cookies';
import { initApp } from 'actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.initApp();
    }

    render() {
        if (!this.props.appInitialized) {
            return <Spinner />
        };

        return (
            <>
                {this.props.loading && <Spinner />}
                <Router>
                    <Switch>
                        <Route path="/" exact component={InsertWordScreen} />
                        <Route path="/quiz" component={QuizScreen} />
                        <Route path="/results" component={QuizResults} />
                        <Route component={() => <div>not found</div>} />
                    </Switch>
                </Router>
                <CookieListener />
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        loading: state.loading,
        appInitialized: state.appInitialized
    }
};

const mapDispatchToProps = dispatch => {
    return {
        initApp: () => dispatch(initApp())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);