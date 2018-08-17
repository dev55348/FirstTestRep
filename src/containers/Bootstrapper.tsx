import * as React from 'react';
import { connect } from "react-redux"
import { Service } from "../store/feature"

class BootStrapperStateProps { }

class BootstraperDispatchProps {
    loadFeatures: () => void;
}

class Bootstrapper extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>
{
    componentWillMount() {
        this.props.loadFeatures();
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
            dispatch(Service.loadFeatures());
        }
    }
}

export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(Bootstrapper);