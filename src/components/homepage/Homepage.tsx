import * as React from 'react';

import './homepage.scss';
import TopBar from '../header/TopBar';
import SearchBar from './SearchBar';
import Content from './Content';
import Footer from '../footer/Footer';

class Homepage extends React.Component<{}, {}>{
    render(){
      return <div>
          <TopBar />
          <SearchBar />
          <Content />
          <Footer />
        </div>
    }
}
export default Homepage