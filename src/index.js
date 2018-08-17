import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Main from './Main';

// class Main extends React.Component{
//     render(){
//         return <h2>Main</h2>;
//     }
// }

ReactDOM.render(
    // <BrowserRouter>
    //     <Switch>
    //         <Route exact path="/" component={Main}/>
    //         <Route path="/userList" component={App}/>
    //         <Route path="/signin" component={SignIn}/>
    //     </Switch>
    // </BrowserRouter>,
    <Main/>, 
    document.getElementById('root'));
registerServiceWorker();
