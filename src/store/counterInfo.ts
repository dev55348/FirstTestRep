import ActionDeclaration from "./ActionDeclaration"
import { CounterInfo } from "../service/entities"
import CounterInfoService from "../service/CounterInfoApiService";
import { StoreState } from "./";

class Actions {
    private static prefix: string = "COUNTERINFO/";
    public static SetCounterInfoList = new ActionDeclaration<{ counterInfo: Array<CounterInfo> }>(Actions.prefix + "SET_COUNTERINFO_LIST");
    //add action which can change is loading
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class CounterInfoState {
    countersInfo: Array<CounterInfo>;
    //add boolean flag isLoading
}

const defaultState: CounterInfoState = {
    countersInfo: []
}

function reduce(state: CounterInfoState = defaultState, action: any): CounterInfoState {
    switch (action.type) {

        case Actions.SetCounterInfoList.name:
            return { countersInfo: Actions.SetCounterInfoList.fromAction(action).counterInfo };

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class CounterInfoDispatchService {

    public static loadCounterInfo() {
        return (dispatch, getState: () => StoreState) => {

            // set is loading

            CounterInfoService.getCounterInfo((items) => {
                dispatch(Actions.SetCounterInfoList.toAction({ counterInfo: items }));

                // set is not loading
            })

        }
    }
}


const name = "counterInfo";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    name as name,
    CounterInfoState as state,
    CounterInfoDispatchService as ServiceCounterInfo
};
