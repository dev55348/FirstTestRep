import * as React from 'react';
import { connect } from "react-redux";
import { ServiceFeaturedBlog } from "store/featuredBlog";

import { FeaturedBlog } from "service/entities";
import { StoreState } from "store";
import BlogList from '../components/homepage/BlogList';

class BootStrapperStateProps {
    featuredBlog: Array<FeaturedBlog>;
    //add is loading
}

class FeaturedBlogListContainer extends React.Component<BootStrapperStateProps, {}>
{
    render() {
        //is loading show spinner
        return <BlogList blogItems = {this.props.featuredBlog.map(item => {return {title: item.title, author: item.author, date: item.createdAt}})}/>
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        featuredBlog: state.featuredBlog.featuredBlog
    };
}

export default connect<BootStrapperStateProps, any, any>(mapStateToProps, null)(FeaturedBlogListContainer);