import * as React from 'react';
import { Link } from "react-router-dom"

import BottomBar from './BottomBar';
import Socials from './Socials';

class Footer extends React.Component<{}, {}>{
    render(){
      return <div className="footer">
        <p>2018 KNOWPIA</p>
        <p>By using this pla.orm, you agree to the <Link to={`/tc`}>Terms of Use.</Link></p>
        <BottomBar />
        <Socials />
      </div>
    }
}
export default Footer