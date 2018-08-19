import * as React from 'react';

class BottomBar extends React.Component<{}, {}>{
    render(){
      return <div className="bottom-bar-wrapper">
        <ul className="bottom-bar">
            <li><a href="">About</a></li>
            <li><a href="">How it Works</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">FAQ</a></li>
        </ul>
      </div>
    }
}
export default BottomBar