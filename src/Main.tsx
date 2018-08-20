import * as React from 'react';

import Homepage from './components/homepage/Homepage';
import { createStore } from "./store"
import { Provider } from "react-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from 'react-localize-redux';
import { LocalizeProvider } from "react-localize-redux";
import { Switch, Route } from "react-router-dom";

import Bootstrapper from "./containers/Bootstrapper"

var enTranslations = require('./en-translation.json');
var frTranslations = require('./ch-translation.json');
import MainLayout from "./components/MainLayout"
import SearchResultPage from "./components/searchResult/searchResultPage"
import BlogPage from './components/blog/BlogPage';
import KnowpediaPage from './components/knowpedia/KnowpediaPage';
import NotFoundPage from './components/NotFound/NotFoundPage';
import SignInPage from './components/SignIn/SignInPage';
import SignUpPage from './components/SignUp/SignUpPage';
import TcPage from './components/Tc/TcPage'


export default class Main extends React.Component<{}, {}>{
    render() {

        let store = createStore();

        return <LocalizeProvider>
            <Provider store={store}>
                <div>
                    <LocalizationFacadeInitializerLocaled>
                        <MainLayout>
                            <Switch>
                                <Route exact path='/' component={Homepage} />
                                <Route path="/search/:searchString?" component={SearchResultPage} />
                                <Route path='/blog' component={BlogPage} />
                                <Route path='/knowpedia' component={KnowpediaPage} />
                                <Route path='/signin' component={SignInPage}/>
                                <Route path='/signup' component={SignUpPage} />
                                <Route path='/tc' component={TcPage} />
                                <Route component={NotFoundPage}/>
                            </Switch>
                        </MainLayout>
                    </LocalizationFacadeInitializerLocaled>
                    <Bootstrapper />
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
                defaultLanguage: 'en'
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
