import ActionDeclaration from "./ActionDeclaration"
import { Feature } from "../service/entities"
import FeatureService from "../service/FeatureApiService";
import { StoreState } from "./";

class Actions {
    private static prefix: string = "FEATURE/";
    public static SetFeatureList = new ActionDeclaration<{ features: Array<Feature> }>(Actions.prefix + "SET_FEATURES_LIST");
    //add action which can change is loading
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class FeatureState {
    features: Array<Feature>;
    //add boolean flag isLoading
}

const defaultState: FeatureState = {
    features: []
}

function reduce(state: FeatureState = defaultState, action: any): FeatureState {
    switch (action.type) {

        case Actions.SetFeatureList.name:
            return { features: Actions.SetFeatureList.fromAction(action).features };

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class FeatureDispatchService {

    public static loadFeatures() {
        return (dispatch, getState: () => StoreState) => {

            // set is loading

            FeatureService.getFeatures((items) => {
                dispatch(Actions.SetFeatureList.toAction({ features: items }));

                // set is not loading
            })

        }
    }
}


const name = "feature";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    name as name,
    FeatureState as state,
    FeatureDispatchService as Service
};
