import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import FormContainer from './components/Form/FormContainer';

import './App.css';

class App extends Component {

    constructor () {
        super(...arguments);
        this.state = {
            searching: false,
            searchResults: [],
            focus: false
        }
    }

    render = () => {
        return (
            <div className="App">
                <Switch>
                    <Redirect exact from="/" to="/rentalcars"/>
                    <Route path="/rentalcars" component={FormContainer}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect()(App))
