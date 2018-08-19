import * as React from 'react';
import { connect } from "react-redux"
import { Feature } from "../service/entities"
import { StoreState } from "../store"
import FeatureList from "../components/homepage/AsFeaturedIn"

class BootStrapperStateProps {
    features: Array<Feature>;
}

class FeatureListContainer extends React.Component<BootStrapperStateProps, {}>
{
    render() {
        return <FeatureList featuresItems={this.props.features.map(item => { return { imageUrl: item.imageUrl } })} />
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        features: state.feature.features
    };
}

export default connect<BootStrapperStateProps, any, any>(mapStateToProps, null)(FeatureListContainer);