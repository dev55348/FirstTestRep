import * as React from 'react';

class Counters extends React.Component<{}, {}>{
    render(){
      return <div className="counters">
        <div className="col-3">
            <p className="count">2,142</p>
            <p className="count-name">Contributors</p>
        </div>
        <div className="col-3">
            <p className="count">10,000</p>
            <p className="count-name">Posts Created</p>
        </div>
        <div className="col-3">
            <p className="count">5,329</p>
            <p className="count-name">Points Rewarded</p>
        </div>
      </div>
    }
}
export default Counters