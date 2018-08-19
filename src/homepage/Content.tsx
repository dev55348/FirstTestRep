import * as React from 'react';

import Welcome from './Welcome';
import FeatureListContainer from "../containers/FeatureListContainer"
import FeaturedBlogListContainer from '../containers/FeaturedBlogListContainer';
import EditorListContainer from '../containers/EditorListContainer';
import ArticleListContainer from "../containers/ArticleListContainer";
import CounterInfoListContainer from "../containers/CounterInfoListContainer";

class Content extends React.Component<{}, {}>{
    render(){
      return <div>
        <Welcome />
        <FeatureListContainer/>
        <FeaturedBlogListContainer />
        <EditorListContainer />
        <ArticleListContainer />
        <CounterInfoListContainer />
      </div>
    }
}
export default Content