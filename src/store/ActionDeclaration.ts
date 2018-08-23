import * as lodash from "lodash"

class ActionDeclaration<Command = {}>{

    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    

    public toAction(Command: Command = null) {
        return {
            type: this.name,
            payload: Command
        };
    }

    public fromAction(action: any) {
        return action.payload as Command;
    }
}

export function batchDispatchComposite(...params) {
    return { commands: params, batch: 'batch', type: params.map(item => item.type).join(', ') };
}

export function reducerBuilder<State>(dispose: string, defaultState: State, actions: Array<ActionDeclaration<any>>) {

    return function reduce(state: State = defaultState, action: any): State {
        if (action.type == dispose) return defaultState;
        let assign = (pair: any) => lodash.assign({}, state, pair);

        if (action.batch !== 'batch') {
            for (var actionCurrent of actions) {
                if (action.type == actionCurrent.name) return assign(actionCurrent.fromAction(action));
            }
        }
        else {
            let object = lodash.assign({}, state);
            for (var actionItem of action.commands) {
                var actionDeclaration = actions.find(item => item.name == actionItem.type);
                if (actionDeclaration != null) {
                    object = lodash.assign({}, object, actionDeclaration.fromAction(actionItem));
                }
            }
            return object;
        }

        return state;
    }
}

export default ActionDeclaration;