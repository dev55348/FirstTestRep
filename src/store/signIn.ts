import ActionDeclaration from "./ActionDeclaration"
import { StoreState } from ".";

class Actions {
    private static prefix: string = "SIGNIN/";
    public static SetIsOpen = new ActionDeclaration<{ isOpen: boolean}>(Actions.prefix + "SET_ISOPEN");
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class SignInState {
    isOpen: boolean;
}

const defaultState: SignInState = {
    isOpen: true,
}

function reduce(state: SignInState = defaultState, action: any): SignInState {
    switch (action.type) {

        case Actions.SetIsOpen.name:
            return {...state,isOpen: Actions.SetIsOpen.fromAction(action).isOpen };

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class SignInDispatchService {

    public static loadIsOpen(text: string) {
        return (dispatch, getState: () => StoreState) => {
            var open: boolean = true;
            () => { 
                debugger;
                return dispatch(Actions.SetIsOpen.toAction({isOpen: open}));
            };
            
            // SearchService.getSearchResults(text,(items) => {
            //     // dispatch(Actions.SetResults.toAction({ results: items }));
            // });

        }
    }
}


const name = "signIn";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    name as name,
    SignInState as state,
    SignInDispatchService as ServiceSignIn
};
