import React, { Component } from 'react';

class SearchComponent extends Component{
    render(){
      return <div>
        <label>Search: </label>
        <input ref="inputFilter" onChange={() => {this.props.onfilteredUserList(this.refs.inputFilter.value)}}/>
      </div>
    }
}
export default SearchComponent