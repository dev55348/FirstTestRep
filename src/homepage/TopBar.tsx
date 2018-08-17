import * as React from 'react';

import Localization from './Localization';

class TopBar extends React.Component<{}, {}>{
    render(){
      return <header className="header">
        <button className="btn-menu"><span></span><span></span><span></span></button>
        <ul className="top-bar top-left-bar">
            <li><a className="logo" href='#'>KnowpiaLogo</a></li>
            <li><a href='#'>KNOWPedia</a></li>
            <li><a href='#'>Blog</a></li>
        </ul>
        <ul className="top-bar top-right-bar">
            <li><a href="#">How it works</a></li>
            <li><a href="#">Sign in</a> | <a href="#">Get Started</a></li>
            <li>
                <Localization />
            </li>
        </ul>
      </header>
    }
}
export default TopBar