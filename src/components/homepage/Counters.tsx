import * as React from 'react';

class StateProps {
    counterItems: Array<{ name: string, count: number }>;
}

class Counters extends React.Component<StateProps, {}>{
    render(){
      return <div className="counters">
        {this.props.counterItems.map(item => {
        return <div className="col-3">
            <p className="count">{item.count}</p>
            <p className="count-name">{item.name}</p>
        </div>
        })}
      </div>
    }
}
export default Counters