import ActionDeclaration from "./ActionDeclaration"
import { Editor } from "../service/entities"
import EditorService from "../service/EditorApiService";
import { StoreState } from "./";

class Actions {
    private static prefix: string = "EDITOR/";
    public static SetEditorsList = new ActionDeclaration<{editors: Array<Editor> }>(Actions.prefix + "SET_EDITORS_LIST");
    public static Dispose = new ActionDeclaration(Actions.prefix + "DISPOSE");
}

class EditorState {
    editors: Array<Editor>;
}

const defaultState: EditorState = {
    editors: []
}

function reduce(state: EditorState = defaultState, action: any): EditorState {
    switch (action.type) {

        case Actions.SetEditorsList.name:
            return {...state, editors: Actions.SetEditorsList.fromAction(action).editors };

        case Actions.Dispose.name:
            return defaultState;

        default: return state;
    }
}

class EditorDispatchService {

    public static loadEditors(id: string) {
        return (dispatch, getState: () => StoreState) => {

            EditorService.getEditors(id,(items) => {
                dispatch(Actions.SetEditorsList.toAction({editors: items }));
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
    EditorDispatchService as ServiceEditor
};
