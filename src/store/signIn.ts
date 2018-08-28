import ActionDeclaration from "./ActionDeclaration"
import { StoreState } from ".";
import { SignIn } from "../service/entities";
import SignInApiService from "../service/SignInApiService";

class Actions {
    private static prefix: string = "SIGNIN/";
    public static SetIsOpen = new ActionDeclaration<{ isOpen: boolean}>(Actions.prefix + "SET_ISOPEN");
    public static SendRequest = new ActionDeclaration<{ request: SignIn}>(Actions.prefix + "SEND_REQUEST")
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class SignInState {
    isOpen: boolean;
    sendRequest: SignIn;
}

const defaultState: SignInState = {
    isOpen: false,
    sendRequest: null
}

function reduce(state: SignInState = defaultState, action: any): SignInState {
    switch (action.type) {

        case Actions.SetIsOpen.name:
            return {...state,isOpen: Actions.SetIsOpen.fromAction(action).isOpen };

        case Actions.SendRequest.name:
            return {...state,sendRequest: Actions.SendRequest.fromAction(action).request}

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class SignInDispatchService {
    public static setIsOpen(isOpen: boolean) {
        return (dispatch, getState: () => StoreState) => {
            dispatch(Actions.SetIsOpen.toAction({isOpen: isOpen}));
        }
    }
    public static sendRequest(request: SignIn) {
        return (dispatch, getState: () => StoreState) => {
            SignInApiService.sendRequest(request,(items) => {
                
            })
        }
            // dispatch(Actions.SendRequest.toAction({request: request}));
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
