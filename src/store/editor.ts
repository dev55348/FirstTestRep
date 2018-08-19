import ActionDeclaration from "./ActionDeclaration"
import { Editor } from "../service/entities"
import EditorService from "../service/EditorApiService";
import { StoreState } from "./";

class Actions {
    private static prefix: string = "EDITOR/";
    public static SetEditorsList = new ActionDeclaration<{ editors: Array<Editor> }>(Actions.prefix + "SET_EDITORS_LIST");
    //add action which can change is loading
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class EditorState {
    editors: Array<Editor>;
    //add boolean flag isLoading
}

const defaultState: EditorState = {
    editors: []
}

function reduce(state: EditorState = defaultState, action: any): EditorState {
    switch (action.type) {

        case Actions.SetEditorsList.name:
            return { editors: Actions.SetEditorsList.fromAction(action).editors };

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class FeatureDispatchService {

    public static loadEditors() {
        return (dispatch, getState: () => StoreState) => {

            // set is loading

            EditorService.getEditors((items) => {
                dispatch(Actions.SetEditorsList.toAction({ editors: items }));

                // set is not loading
            })

        }
    }
}


const name = "editor";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    name as name,
    EditorState as state,
    FeatureDispatchService as ServiceEditor
};
