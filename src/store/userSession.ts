import ActionDeclaration from "./ActionDeclaration"

class Actions {
    private static prefix: string = "USER_SESISON/";
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class UserSessionState{
    userId:string;
}

const defaultState:UserSessionState ={
    userId: null
}

function reduce(state: UserSessionState = defaultState, action: any): UserSessionState {
    switch (action.type) {
        case Actions.Dispose.name:
            return defaultState;
        default: return state;
    }
}

const name = "userSession";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    name as name,
    UserSessionState as state
};
