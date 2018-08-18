import * as React from 'react';
import { connect } from "react-redux"
import { ServiceFeaturedBlog } from "store/featuredBlog"

import { FeaturedBlog } from "service/entities"
import { StoreState } from "store"

class BootStrapperStateProps {
    featuredBlog: Array<FeaturedBlog>;
    //add is loading
}

class FeaturedBlogListContainer extends React.Component<BootStrapperStateProps, {}>
{
    render() {
        //is loading show spinner
        return <div>{this.props.featuredBlog.map(item => <div>{item.title}</div>)}</div>;
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        featuredBlog: state.featuredBlog.featuredBlog
    };
}


export default connect<BootStrapperStateProps, any, any>(mapStateToProps, null)(FeaturedBlogListContainer);