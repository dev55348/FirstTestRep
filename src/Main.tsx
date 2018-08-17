import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Homepage from './homepage/Homepage';
import { createStore } from "./store"
import { Provider } from "react-redux";
//Router and components

export default class Main extends React.Component<{}, {}>{
    render() {

        let store = createStore();

        return <Provider store={store}>
            <Homepage />
        </Provider>
    }
}