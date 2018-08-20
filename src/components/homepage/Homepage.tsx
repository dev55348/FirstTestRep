import * as React from 'react';

import './homepage.scss';
import SearchBar from './SearchBar';
import Content from './Content';
import MainLayout from "../MainLayout"

class Homepage extends React.Component<{}, {}>{
    render() {
        return <div>
            <SearchBar />
            <Content />
        </div>
    }
}
export default Homepage