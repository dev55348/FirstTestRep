import ActionDeclaration from "./ActionDeclaration"
import SearchService from "../service/SearchApiService";
import { StoreState } from "../store";

class Actions {
    private static prefix: string = "SEARCH/";
    public static SetQueryString = new ActionDeclaration<{ queryString: string }>(Actions.prefix + "SET_SEARCH_LIST");
    public static SetIsResultLoading = new ActionDeclaration<{ isResultLoading: boolean}>(Actions.prefix + "SET_ISRESULTLOADING");
    public static SetResults = new ActionDeclaration<{ results: Array<any>}>(Actions.prefix + "SET_RESULTS_LIST");
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class SearchState {
    queryString: string;
    isResultLoading: boolean;
    results: Array<any>;
}

const defaultState: SearchState = {
    queryString: "",
    isResultLoading: false,
    results: []
}

function reduce(state: SearchState = defaultState, action: any): SearchState {
    switch (action.type) {

        case Actions.SetQueryString.name:
            return {...state,queryString: Actions.SetQueryString.fromAction(action).queryString};

        case Actions.SetIsResultLoading.name:
            return {...state,isResultLoading: Actions.SetIsResultLoading.fromAction(action).isResultLoading };

        case Actions.SetResults.name:
            return {...state,results:Actions.SetResults.fromAction(action).results };

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class SearchDispatchService {

    public static loadSearchResoult(text: string) {
        return (dispatch, getState: () => StoreState) => {

            SearchService.getSearchResults(text,(items) => {
                dispatch(Actions.SetResults.toAction({ results: items }));
            });

        }
    }
}


const name = "search";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    name as name,
    SearchState as state,
    SearchDispatchService as ServiceSearch
};
