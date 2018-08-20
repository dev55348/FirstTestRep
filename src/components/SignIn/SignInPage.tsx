import * as React from 'react'

export default class SignInPage extends React.Component<{}, {}>{
    
    render() {
        return <div className="content-wrapper">
        <label>Sign in</label>
        <label>Login</label>
        <input type="text"/>
        <label>Password</label>
        <input type="password"/>
        </div>
    }
}