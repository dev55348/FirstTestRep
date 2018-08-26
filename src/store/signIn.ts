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
    isOpen: false,
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
    public static setIsOpen(isOpen: boolean) {
        return (dispatch, getState: () => StoreState) => {
                dispatch(Actions.SetIsOpen.toAction({isOpen: isOpen}));
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
