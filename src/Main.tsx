import * as React from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< HEAD

import Homepage from './homepage/Homepage';

//Router and components

export default class Main extends React.Component<{}, {}>{
    render() {
        return <div><Homepage /></div> // <Pavlo component> <>
=======
import { createStore } from "./store"
import { Provider } from "react-redux";

export default class Main extends React.Component<{}, {}>{
    render() {

        let store = createStore();

        return <Provider store={store}>
            <div>Test</div>
        </Provider>
>>>>>>> 8779620a8f8c2a086622e1eb7cc83a99ca20f30d
    }
}