import * as React from 'react';
import { connect } from "react-redux";

import { CounterInfo } from "../service/entities";
import { StoreState } from "../store";

import Counters from '../components/homepage/Counters';

class BootStrapperStateProps {
    countersInfo: Array<CounterInfo>;
    //add is loading
}

//temporary tester
class CountTester extends React.Component<BootStrapperStateProps, {}>
{
    render() {
        return <Counters counterItems={this.props.countersInfo.map(item => { return { name: item.name, count: item.count } })}/>
        //is loading show spinner
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {

    return {
        countersInfo: state.counterInfo.countersInfo
    };
}


export default connect<BootStrapperStateProps, any, any>(mapStateToProps, null)(CountTester);





