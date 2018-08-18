import * as React from 'react';

import Welcome from './Welcome';
import FeatureListContainer from "../containers/FeatureListContainer"
import FeaturedBlogListContainer from '../containers/FeaturedBlogListContainer';

class Content extends React.Component<{}, {}>{
    render(){
      return <div>
        <Welcome />
        <FeatureListContainer/>
        <FeaturedBlogListContainer />
      </div>
    }
}
export default Content