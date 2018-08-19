import * as React from 'react';

import Localization from './Localization';
import { withLocalize } from 'react-localize-redux';

class TopBar extends React.Component<any, {}>{
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
                <li><a href="#">{this.props.translate("topbar.signIn")}</a> | <a href="#">{this.props.translate("topbar.getStarted")}</a></li>
                <li>
                    <Localization />
                </li>
            </ul>
        </header>
    }
}
export default withLocalize<any>(TopBar)