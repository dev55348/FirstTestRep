import ActionDeclaration from "./ActionDeclaration"
import { Article } from "../service/entities"
import ArticleService from "../service/ArticleApiService";
import { StoreState } from "./";

class Actions {
    private static prefix: string = "ARTICLE/";
    public static SetArticleList = new ActionDeclaration<{ articles: Array<Article> }>(Actions.prefix + "SET_ARTICLES_LIST");
    //add action which can change is loading
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class ArticleState {
    articles: Array<Article>;
    //add boolean flag isLoading
}

const defaultState: ArticleState = {
    articles: []
}

function reduce(state: ArticleState = defaultState, action: any): ArticleState {
    switch (action.type) {

        case Actions.SetArticleList.name:
            return { articles: Actions.SetArticleList.fromAction(action).articles };

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class ArticleDispatchService {

    public static loadArticles() {
        return (dispatch, getState: () => StoreState) => {

            // set is loading

            ArticleService.getArticles((items) => {
                dispatch(Actions.SetArticleList.toAction({ articles: items }));

                // set is not loading
            })

        }
    }
}


const name = "article";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    name as name,
    ArticleState as state,
    ArticleDispatchService as ServiceArticle
};
