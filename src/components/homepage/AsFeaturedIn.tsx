import * as React from 'react';

class StateProps {
  featuresItems: Array<{ imageUrl: string }>;
}

class AsFeaturedIn extends React.Component<StateProps, {}>{
  
  render() {
    debugger;
    return <div className="col-2 as-featured-in">
      <h4>As featured in:</h4>
      {this.props.featuresItems.map(item => { return <div className="col-4"><img src={item.imageUrl} alt="" /></div> })}
    </div>
  }
}
/*
<div className="col-4"><img src="../.././public/images/cnn.png" alt="" /></div>
<div className="col-4"><img src="../.././public/images/cointelegraph.png" alt="" /></div>
<div className="col-4"><img src="../.././public/images/nyt.png" alt="" /></div>
<div className="col-4"><img src="../.././public/images/wired_logo.png" alt="" /></div>
<div className="col-4"><img src="../.././public/images/forbes.png" alt="" /></div>
<div className="col-4"><img src="../.././public/images/fc.png" alt="" /></div>
<div className="col-4"><img src="../.././public/images/hp.png" alt="" /></div>
*/
export default AsFeaturedIn