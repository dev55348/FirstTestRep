import ActionDeclaration from "./ActionDeclaration"
import { StoreState } from ".";
import { SignIn } from "../service/entities";
import SignInApiService from "../service/SignInApiService";
import ActionSettingsVoice from "material-ui/SvgIcon";

class Actions {
    private static prefix: string = "SIGNIN/";
    public static SetIsOpen = new ActionDeclaration<{ isOpen: boolean}>(Actions.prefix + "SET_ISOPEN");
    public static SendRequest = new ActionDeclaration<{ request: SignIn}>(Actions.prefix + "SEND_REQUEST");
    public static SetError = new ActionDeclaration<{ error: object}>(Actions.prefix + "SET_ERROR");
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class SignInState {
    isOpen: boolean;
    sendRequest: SignIn;
    error: object;
}

const defaultState: SignInState = {
    isOpen: false,
    sendRequest: null,
    error: {}
}

function reduce(state: SignInState = defaultState, action: any): SignInState {
    switch (action.type) {

        case Actions.SetIsOpen.name:
            return {...state,isOpen: Actions.SetIsOpen.fromAction(action).isOpen };

        case Actions.SendRequest.name:
            return {...state,sendRequest: Actions.SendRequest.fromAction(action).request};

        case Actions.SetError.name:
            return {...state,error: Actions.SetError.fromAction(action).error};

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
            SignInApiService.sendRequest(request,(items, error) => {
                if(error)
                {
                    dispatch(Actions.SetError.toAction({error: error}));
                }
            })
        }
    }
    public static setError(error: object) {
        return (dispatch, getState: () => StoreState) => {
            dispatch(Actions.SetError.toAction({error: error}));
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
