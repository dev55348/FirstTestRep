import ActionDeclaration from "./ActionDeclaration"
import { StoreState } from "./index";
import { SignUp } from "../service/entities";
import SignUpApiService from "../service/SignUpApiService";

class Actions {
    private static prefix: string = "SIGNUP/";
    public static SetIsOpen = new ActionDeclaration<{ isOpen: boolean}>(Actions.prefix + "SET_ISOPEN");
    public static SendRequest = new ActionDeclaration<{ request: SignUp}>(Actions.prefix + "SEND_REQUEST")
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class SignUpState {
    isOpen: boolean;
    sendRequest: SignUp;
}

const defaultState: SignUpState = {
    isOpen: false,
    sendRequest: null
}

function reduce(state: SignUpState = defaultState, action: any): SignUpState {
    switch (action.type) {
        case Actions.SetIsOpen.name:
            return {...state,isOpen: Actions.SetIsOpen.fromAction(action).isOpen };

        case Actions.SendRequest.name:
            return {...state,sendRequest: Actions.SendRequest.fromAction(action).request};

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class SignUpDispatchService {
    public static setIsOpen(isOpen: boolean) {
        debugger;
        return (dispatch, getState: () => StoreState) => {
            dispatch(Actions.SetIsOpen.toAction({isOpen: isOpen}));
        }
    }
    public static sendRequest(request: SignUp) {
        return (dispatch, getState: () => StoreState) => {
            SignUpApiService.sendRequest(request,(items) => {
                
            })
        }
            // dispatch(Actions.SendRequest.toAction({request: request}));
    }
}


const name = "signUp";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    name as name,
    SignUpState as state,
    SignUpDispatchService as ServiceSignUp
};
