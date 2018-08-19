import * as React from 'react';

import Welcome from './Welcome';
import AsFeaturedIn from './AsFeaturedIn';
import HowItWorks from './HowItWorks';
import Counters from './Counters';
import Footer from './Footer';

import FeatureListContainer from "../containers/FeatureListContainer"
import FeaturedBlogListContainer from '../containers/FeaturedBlogListContainer';

class Content extends React.Component<{}, {}>{
    render(){
      return <div className="content-wrapper">
        <Welcome />
        <AsFeaturedIn />

        <HowItWorks />
        <Counters />

        <Footer />

        {/* <FeatureListContainer/>
        <FeaturedBlogListContainer /> */}
      </div>
    }
}
export default Content