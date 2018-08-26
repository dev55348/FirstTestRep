import * as React from 'react';
import Header from "./header/TopBar"
import Footer from "./footer/Footer"
import SignInPage from './SignIn/SignInPage';
import { StoreState } from '../store';
import { connect } from 'react-redux';

class BootStrapperStateProps {
    modalIsOpen: boolean;
}

class Homepage extends React.Component<BootStrapperStateProps, {}>{
        
    // } signInModalvisibleFalse() {
    //     debugger;
    //     isOpen = false;
    // }
    render() {
        debugger;
        return <div>
            <Header />
             {this.props.children}
            <Footer />
            {this.props.modalIsOpen ? <SignInPage /> : null}
        </div>
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        modalIsOpen: state.signIn.isOpen
    };
  }
  
export default connect<BootStrapperStateProps, any, any>(mapStateToProps)(Homepage)