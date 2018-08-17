import * as React from 'react';

import './homepage.scss';
import TopBar from './TopBar';

class Homepage extends React.Component<{}, {}>{
    render(){
      return <div>
          <TopBar />
        </div>
    }
}
export default Homepage