import * as React from 'react';
import { connect } from "react-redux";
import { ServiceFeature } from "../store/feature";

import { Article } from "../service/entities";
import { StoreState } from "../store";

import ArticleList from '../components/homepage/ArticleList';

class BootStrapperStateProps {
    articles: Array<Article>;
    //add is loading
}

class ArticleListContainer extends React.Component<BootStrapperStateProps, {}>
{
    render() {
        //is loading show spinner
        return <ArticleList articleItems={this.props.articles.map(item => {return {name: item.title}})}/>
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        articles: state.article.articles
    };
}


export default connect<BootStrapperStateProps, any, any>(mapStateToProps, null)(ArticleListContainer);