import * as React from 'react';
import { connect } from "react-redux"
import { Service } from "../store/feature"

import { Feature } from "../service/entities"
import { StoreState } from "../store"

class BootStrapperStateProps {
    features: Array<Feature>;
    //add is loading
}

class FeatureListContainer extends React.Component<BootStrapperStateProps, {}>
{
    render() {
        //is loading show spinner
        return <div>{this.props.features.map(item => <div>{item.name}</div>)}</div>;
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        features: state.feature.features
    };
}


export default connect<BootStrapperStateProps, any, any>(mapStateToProps, null)(FeatureListContainer);