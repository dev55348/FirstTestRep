import React,{Component} from 'react';

class SignIn extends Component{
    render() {
        return <div>
        <h1>Sign in</h1>
        <input placeholder="Login" />
        <input placeholder="Password"/>
        <button>Sign-In</button>
        </div>
    }
}
export default SignIn;