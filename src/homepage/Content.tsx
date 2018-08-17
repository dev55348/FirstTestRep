import * as React from 'react';

import Welcome from './Welcome';
import FeatureListContainer from "../containers/FeatureListContainer"

class Content extends React.Component<{}, {}>{
    render(){
      return <div>
        <Welcome />
        <FeatureListContainer/>
      </div>
    }
}
export default Content