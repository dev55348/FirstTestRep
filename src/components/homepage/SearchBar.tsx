import * as React from 'react';
import { StoreState } from '../../store';
import { connect } from 'react-redux';
import {ServiceSearch} from '../../store/search';



class BootStrapperStateProps {
    queryString: string;
    isResultLoading: boolean;
    results: Array<any>;
}
class BootstraperDispatchProps {
  loadSerchItems: (text: string) => void;
}


const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
  return {
    loadSerchItems: (text) => {
        dispatch(ServiceSearch.loadSearchResoult(text));
    }
  }
}

class SearchBar extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>{

  onSearchStringChange = (e) => {
    this.props.loadSerchItems(e.target.value);
    debugger;
  }
  
  render() {
    return <div>
      <div className="search-wrapper">
        <input className="input-search" placeholder="Search..." onChange={(e) => this.onSearchStringChange(e)} />
        <div className="searchPopup" style={{display: this.props.results.length > 0 ? "block" : "none"}}>
          <h2>search modal</h2>
          <div className="content">
            {this.props.results.map(item => { return <div>{item}</div> })}
          </div>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
  return {
      queryString: state.search.queryString,
      isResultLoading: state.search.isResultLoading,
      results: state.search.results
  };
}

export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(SearchBar);