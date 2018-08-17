import * as React from 'react';

class SearchBar extends React.Component<{}, {}>{
    render(){
      return <div className="search-wrapper">
        <input className="input-search" placeholder="Search..."/>
      </div>
    }
}
export default SearchBar