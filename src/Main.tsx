import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from "./store"
import { Provider } from "react-redux";

export default class Main extends React.Component<{}, {}>{
    render() {

        let store = createStore();

        return <Provider store={store}>
            <div>Test</div>
        </Provider>
    }
}