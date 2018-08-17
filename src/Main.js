import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';

class Main extends Component{
    render() {
        return <div>
            <div>
                <a href='/userList'>User list</a>
                <a href='/signIn'> SignIn</a>
                </div>
    <BrowserRouter>
        <Switch>
            <Route path="/userList" component={App}/>
            <Route path="/signin" component={SignIn}/>
        </Switch>
    </BrowserRouter>
        </div>
    }
}
export default Main;