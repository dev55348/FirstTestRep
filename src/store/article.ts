import ActionDeclaration from "./ActionDeclaration"
import { Article } from "../service/entities"
import ArticleService from "../service/ArticleApiService";
import { StoreState } from "./";

class Actions {
    private static prefix: string = "ARTICLE/";
    public static SetArticleList = new ActionDeclaration<{id: string, articles: Array<Article> }>(Actions.prefix + "SET_ARTICLES_LIST");
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class ArticleState {
    articles: Array<Article>;
}

const defaultState: ArticleState = {
    articles: []
}

function reduce(state: ArticleState = defaultState, action: any): ArticleState {
    switch (action.type) {

        case Actions.SetArticleList.name:
            return {...state, articles: Actions.SetArticleList.fromAction(action).articles };

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class ArticleDispatchService {

    public static loadArticles(id: string) {
        return (dispatch, getState: () => StoreState) => {
            ArticleService.getArticles(id,(items) => {
                dispatch(Actions.SetArticleList.toAction({id: id, articles: items }));
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
