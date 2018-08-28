import * as React from 'react';
import Header from "./header/TopBar"
import Footer from "./footer/Footer"
import SignInContainer from '../containers/SignInContainer';
import SignUpContainer from '../containers/SignUpContainer';

export default class Homepage extends React.Component<{}, {}>{
    render() {
        return <div>
            <Header />
            {this.props.children}
            <Footer />
            <SignInContainer/>
            <SignUpContainer/>
        </div>
    }
}

