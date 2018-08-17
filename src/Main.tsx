import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Homepage from './homepage/Homepage';

//Router and components

export default class Main extends React.Component<{}, {}>{
    render() {
        return <div><Homepage /></div> // <Pavlo component> <>
    }
}