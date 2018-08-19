import * as React from 'react';

import BottomBar from './BottomBar';
import Socials from './Socials';

class Footer extends React.Component<{}, {}>{
    render(){
      return <div className="footer">
        <p>2018 KNOWPIA</p>
        <p>By using this pla.orm, you agree to the <a href="">Terms of Use.</a></p>
        <BottomBar />
        <Socials />
      </div>
    }
}
export default Footer