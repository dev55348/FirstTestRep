import * as React from 'react';
import { connect } from "react-redux"

import { CounterInfo } from "../service/entities"
import { StoreState } from "../store"

class BootStrapperStateProps {
    countersInfo: Array<CounterInfo>;
    //add is loading
}

class CounterInfoListContainer extends React.Component<BootStrapperStateProps, {}>
{
    render() {
        //is loading show spinner
        return <div>{this.props.countersInfo.map(item => <div>{item.name}</div>)}</div>;
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        countersInfo: state.counterInfo.countersInfo
    };
}


export default connect<BootStrapperStateProps, any, any>(mapStateToProps, null)(CounterInfoListContainer);