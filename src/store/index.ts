import * as redux from 'redux';
import { createStore as makeStore, compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as userSession from "./userSession"

export class StoreState{
    userSession: userSession.state
}

function combineBudgetEditReducer() {

    let combinedReducers = {};

    combinedReducers[userSession.name] = userSession.Reducer;

    return redux.combineReducers(combinedReducers);
};


let defaultState = {
    userSession: userSession.DefaultState,
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
