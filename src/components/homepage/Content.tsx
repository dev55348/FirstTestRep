import * as React from 'react';

import Welcome from './Welcome';
import HowItWorks from './HowItWorks';
import Counters from './Counters';

import FeatureListContainer from "../../containers/FeatureListContainer"
import FeaturedBlogListContainer from '../../containers/FeaturedBlogListContainer';
import EditorListContainer from '../../containers/EditorListContainer';
import ArticleListContainer from "../../containers/ArticleListContainer";
import CounterInfoListContainer from "../../containers/CounterInfoListContainer";
import SignInPage from '../SignIn/SignInPage';

class Content extends React.Component<{}, {}>{
    render(){
      return <div className="content-wrapper">
        <Welcome />
        <FeatureListContainer />
        <ArticleListContainer />
        <FeaturedBlogListContainer />
        <HowItWorks />
        <CounterInfoListContainer />
        <EditorListContainer />
      </div>
    }
}
export default Content