import * as redux from 'redux';
import { createStore as makeStore, compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as userSession from "./userSession"
import * as feature from "./feature"
import * as featuredBlog from "./featuredBlog"


import * as localRedux from 'react-localize-redux';

export class StoreState{
    userSession: userSession.state;
    feature: feature.state;
    featuredBlog: featuredBlog.state;
}

function combineBudgetEditReducer() {

    let combinedReducers = {};

    combinedReducers[userSession.name] = userSession.Reducer;
    combinedReducers[feature.name] = feature.Reducer;
    combinedReducers[featuredBlog.name] = featuredBlog.Reducer;

    return redux.combineReducers(combinedReducers);
};


let defaultState = {
    userSession: userSession.DefaultState,
    feature: feature.DefaultState,
    featuredBlog: featuredBlog.DefaultState,

};

export function createStore()
{
  return makeStore(
        combineBudgetEditReducer(),
        defaultState,
        compose(
            applyMiddleware(
                thunk
            ),
            window["devToolsExtension"] ? window["devToolsExtension"]() : f => f
        )
    );
}
