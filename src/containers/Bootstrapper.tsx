import * as React from 'react';
import { connect } from "react-redux"
import { ServiceFeature } from "../store/feature"
import { ServiceFeaturedBlog } from "../store/featuredBlog"
import { ServiceEditor } from "../store/editor"
import { ServiceArticle } from "../store/article"
import { ServiceCounterInfo } from "../store/counterInfo"

class BootStrapperStateProps { }

class BootstraperDispatchProps {
    loadFeatures: () => void;
    loadFeaturedBlog: () => void;
    loadEditors: () => void;
    loadArticles: () => void;
    loadCounterInfo: () => void;
}

class Bootstrapper extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>
{
    componentWillMount() {
        this.props.loadFeatures();
        this.props.loadFeaturedBlog();
        this.props.loadEditors();
        this.props.loadArticles();
        this.props.loadCounterInfo();
    }

    render() {
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
    return {
        loadFeatures: () => {
            dispatch(ServiceFeature.loadFeatures());

        },
        loadFeaturedBlog: () => {
            dispatch(ServiceFeaturedBlog.loadFeaturedBlog())
        },
        loadEditors: () => {
            dispatch(ServiceEditor.loadEditors())
        },
        loadArticles: () => {
            dispatch(ServiceArticle.loadArticles())
        },
        loadCounterInfo: () => {
            dispatch(ServiceCounterInfo.loadCounterInfo())
        }
    }
}

export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(Bootstrapper);