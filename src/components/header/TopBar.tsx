import * as React from 'react';

import Localization from './Localization';
import { withLocalize } from 'react-localize-redux';
import { StoreState } from '../../store';
import { connect } from 'react-redux';
import { ServiceSignIn } from '../../store/signIn';
import { ServiceSignUp } from '../../store/SignUp';

class BootstraperDispatchProps {
  loadSignInIsOpen: () => void;
  loadSignUpIsOpen: () => void;
  logOut: () => void;
}


const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
  return {
    loadSignInIsOpen: () => {
        dispatch(ServiceSignIn.setIsOpen(true));
    },
    loadSignUpIsOpen: () => {
        dispatch(ServiceSignUp.setIsOpen(true));
    },
    logOut: () => {
        localStorage.setItem("userName", "");
        window.location.reload();
    }
  }
}

class TopBar extends React.Component<BootstraperDispatchProps & any, {}>{
    render() {
        return <header className="header">
            <button className="btn-menu"><span></span><span></span><span></span></button>
            <ul className="top-bar top-left-bar">
                <li><a className="logo" href='#'>KnowpiaLogo</a></li>
                <li><a href='#'>KNOWPedia</a></li>
                <li><a href='#'>{this.props.translate("topbar.blog")}</a></li>
            </ul>
            <ul className="top-bar top-right-bar">
                <li><a href="#">{this.props.translate("topbar.howItWorks")}</a></li>
                {localStorage.getItem("userName") !== "" ? <li>Hello {localStorage.getItem("userName")} | <a href="#" onClick={this.props.logOut}>LogOut</a></li>:
                <li><a href="#" onClick={this.props.loadSignInIsOpen}>{this.props.translate("topbar.signIn")}</a> | <a href="#" onClick={this.props.loadSignUpIsOpen}>{this.props.translate("topbar.signUp")}</a> | <a href="#">{this.props.translate("topbar.getStarted")}</a></li>}
                <li>
                    <Localization />
                </li>
            </ul>
        </header>
    }
}

export default withLocalize<any>(connect<any, BootstraperDispatchProps, any>(null, mapDispatchToProps)(TopBar))