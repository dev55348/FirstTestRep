import * as React from 'react';
import SignInPage from '../components/SignIn/SignInPage';
import { StoreState } from '../store';
import { connect } from 'react-redux';

class SignInPageContainerProps {
    modalIsOpen: boolean;
}

class SignInPageContainer extends React.Component<SignInPageContainerProps, {}>
{
    render() {
        if (this.props.modalIsOpen)
            return <SignInPage />
        else return <div></div>
    }
}

const mapStateToProps = (state: StoreState): SignInPageContainerProps => {
    return {
        modalIsOpen: state.signIn.isOpen
    };
}

export default connect<SignInPageContainerProps, any, any>(mapStateToProps)(SignInPageContainer)