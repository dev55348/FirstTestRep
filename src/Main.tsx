import * as React from 'react';

import Homepage from './homepage/Homepage';
import { createStore } from "./store"
import { Provider } from "react-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from 'react-localize-redux';
import { LocalizeProvider } from "react-localize-redux";

var enTranslations = require('./en-translation.json');
var frTranslations = require('./ch-translation.json');

export default class Main extends React.Component<{}, {}>{
    render() {

        let store = createStore();

        return <LocalizeProvider>
            <Provider store={store}>
                <div>
                    <LocalizationFacadeInitializerLocaled>
                        <Homepage />
                    </LocalizationFacadeInitializerLocaled>
                </div>
            </Provider>
        </LocalizeProvider >
    }
}

class LocalizationFacadeInitializer extends React.Component<any, any>
{
    constructor(props) {
        super(props);

        this.props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "Chineese", code: "ch" }
            ],
            options: {
                 renderToStaticMarkup,
                 defaultLanguage:'en'
            }
        });

        this.props.addTranslationForLanguage(enTranslations, "en");
        this.props.addTranslationForLanguage(frTranslations, "ch");
        this.props.setActiveLanguage("en");
    }

    render() {
        return <div> {this.props.children}</div>;
    }
}


let LocalizationFacadeInitializerLocaled = withLocalize<any>(LocalizationFacadeInitializer);
