import ActionDeclaration from "./ActionDeclaration"
import { FeaturedBlog } from "../service/entities"
import FeatureBlogService from "../service/FeaturedBlogApiService";
import { StoreState } from "./";

class Actions {
    private static prefix: string = "FEATUREDBLOG/";
    public static SetFeaturedBlogList = new ActionDeclaration<{ featuredBlog: Array<FeaturedBlog> }>(Actions.prefix + "SET_FEATUREDBLOG_LIST");
    //add action which can change is loading
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class FeaturedBlogState {
    featuredBlog: Array<FeaturedBlog>;
    //add boolean flag isLoading
}

const defaultState: FeaturedBlogState = {
    featuredBlog: []
}

function reduce(state: FeaturedBlogState = defaultState, action: any): FeaturedBlogState {
    switch (action.type) {

        case Actions.SetFeaturedBlogList.name:
            return { featuredBlog: Actions.SetFeaturedBlogList.fromAction(action).featuredBlog };

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class FeaturedBlogDispatchService {

    public static loadFeaturedBlog() {
        return (dispatch, getState: () => StoreState) => {

            // set is loading

            FeatureBlogService.getFeaturedBlog((items) => {
                dispatch(Actions.SetFeaturedBlogList.toAction({ featuredBlog: items }));

                // set is not loading
            })

        }
    }
}


const name = "featuredBlog";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    name as name,
    FeaturedBlogState as state,
    FeaturedBlogDispatchService as ServiceFeaturedBlog
};
