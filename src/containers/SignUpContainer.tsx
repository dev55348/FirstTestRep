import * as React from 'react';
import SignUpPage from '../components/SignUp/SignUpPage';
import { StoreState } from '../store';
import { connect } from 'react-redux';

class SignUpPageContainerProps {
    modalIsOpen: boolean;
}

class SignUpPageContainer extends React.Component<SignUpPageContainerProps, {}>
{
    render() {
        if (this.props.modalIsOpen)
            return <SignUpPage />
        else return <div></div>
    }
}

const mapStateToProps = (state: StoreState): SignUpPageContainerProps => {
    return {
        modalIsOpen: state.signUp.isOpen
    };
}

export default connect<SignUpPageContainerProps, any, any>(mapStateToProps)(SignUpPageContainer)