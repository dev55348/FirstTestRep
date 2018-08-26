import * as React from 'react';

import Localization from './Localization';
import { withLocalize } from 'react-localize-redux';
import { StoreState } from '../../store';
import { connect } from 'react-redux';
import { ServiceSignIn } from '../../store/SignIn';

class BootStrapperStateProps {
    modalIsOpen: boolean;
}
class BootstraperDispatchProps {
  loadIsOpen: () => void;
}


const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
  return {
    loadIsOpen: () => {
        dispatch(ServiceSignIn.setIsOpen(true));
    }
  }
}

class TopBar extends React.Component<BootStrapperStateProps & BootstraperDispatchProps & any, {}>{
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
                <li><a href="#" onClick={this.props.loadIsOpen()}>{this.props.translate("topbar.signIn")}</a> | <a href="#">{this.props.translate("topbar.getStarted")}</a></li>
                <li>
                    <Localization />
                </li>
            </ul>
        </header>
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        modalIsOpen: state.signIn.isOpen
    };
  }

export default withLocalize<any>(connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(TopBar))