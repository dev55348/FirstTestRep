import * as React from 'react';


//future
class StateProps {
  queryString: string;
  results: Array<any>;
  isResultLoading: boolean;
}
class DispatchProps {
  onSearchStringChanged: (searchString: string) => void;
}

class SearchBar extends React.Component<{}, {}>{
  render() {
    return <div className="search-wrapper">
      <input className="input-search" placeholder="Search..." />
    </div>
  }
}
export default SearchBar