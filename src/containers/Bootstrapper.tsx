import * as React from 'react';
import { connect } from "react-redux"
import { ServiceFeature } from "../store/feature"
import { ServiceFeaturedBlog } from "../store/featuredBlog"

class BootStrapperStateProps { }

class BootstraperDispatchProps {
    loadFeatures: () => void;
    loadFeaturedBlog: () => void;
}

class Bootstrapper extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>
{
    componentWillMount() {
        this.props.loadFeatures();
        this.props.loadFeaturedBlog();
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
        }
    }
}

export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(Bootstrapper);