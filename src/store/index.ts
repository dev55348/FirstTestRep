import * as redux from 'redux';
import { createStore as makeStore, compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as userSession from "./userSession"
import * as feature from "./feature"
import * as featuredBlog from "./featuredBlog"
import * as editor from "./editor"
import * as article from "./article"
import * as counterInfo from "./counterInfo"
import * as search from "./search"
import * as signIn from "./signIn"
import * as signUp from "./signUp"

import * as localRedux from 'react-localize-redux';

export class StoreState{
    userSession: userSession.state;
    feature: feature.state;
    featuredBlog: featuredBlog.state;
    editor: editor.state;
    article: article.state;
    counterInfo: counterInfo.state;
    search: search.state;
    signIn: signIn.state;
    signUp: signUp.state;
}

function combineBudgetEditReducer() {

    let combinedReducers = {};

    combinedReducers[userSession.name] = userSession.Reducer;
    combinedReducers[feature.name] = feature.Reducer;
    combinedReducers[featuredBlog.name] = featuredBlog.Reducer;
    combinedReducers[editor.name] = editor.Reducer;
    combinedReducers[article.name] = article.Reducer;
    combinedReducers[counterInfo.name] = counterInfo.Reducer;
    combinedReducers[search.name] = search.Reducer;
    combinedReducers[signIn.name] = signIn.Reducer;
    combinedReducers[signUp.name] = signUp.Reducer;

    return redux.combineReducers(combinedReducers);
};


let defaultState = {
    userSession: userSession.DefaultState,
    feature: feature.DefaultState,
    featuredBlog: featuredBlog.DefaultState,
    editor: editor.DefaultState,
    article: article.DefaultState,
    counterInfo: counterInfo.DefaultState,
    search: search.DefaultState,
    signIn: signIn.DefaultState,
    signUp: signUp.DefaultState
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
