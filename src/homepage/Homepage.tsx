import * as React from 'react';

import './homepage.scss';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import Content from './Content';

class Homepage extends React.Component<{}, {}>{
    render(){
      return <div>
          <TopBar />
          <SearchBar />
          <Content />
        </div>
    }
}
export default Homepage