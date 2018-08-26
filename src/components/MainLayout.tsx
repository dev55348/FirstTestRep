import * as React from 'react';
import Header from "./header/TopBar"
import Footer from "./footer/Footer"
import SignInPage from './SignIn/SignInPage';
import { StoreState } from '../store';
import { connect } from 'react-redux';

export default class Homepage extends React.Component<{}, {}>{
    render() {
        return <div>
            <Header />
            {this.props.children}
            <Footer />
            {SignInContainer}
        </div>
    }
}

class SignInPageContainerProps {
    modalIsOpen: boolean;
}

class SignInPageContainer extends React.Component<SignInPageContainerProps, {}>
{
    render() {
        if (this.props.modalIsOpen)
            return <SignInPage />
        else null;
    }
}

const mapStateToProps = (state: StoreState): SignInPageContainerProps => {
    return {
        modalIsOpen: state.signIn.isOpen
    };
}

let SignInContainer = connect<SignInPageContainerProps, any, any>(mapStateToProps)(SignInPageContainer)