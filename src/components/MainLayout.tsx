import * as React from 'react';
import Header from "./header/TopBar"
import Footer from "./footer/Footer"
import SignInContainer from '../containers/SignInContainer';

export default class Homepage extends React.Component<{}, {}>{
    render() {
        return <div>
            <Header />
            {this.props.children}
            <Footer />
            <SignInContainer/>
        </div>
    }
}

