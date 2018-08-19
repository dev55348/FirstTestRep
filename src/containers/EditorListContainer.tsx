import * as React from 'react';
import { connect } from "react-redux"
import { ServiceEditor } from "../store/editor"

import { Editor } from "../service/entities"
import { StoreState } from "../store"

class BootStrapperStateProps {
    editors: Array<Editor>;
    //add is loading
}

class EditorListContainer extends React.Component<BootStrapperStateProps, {}>
{
    render() {
        //is loading show spinner
        return <div>{this.props.editors.map(item => <div>{item.userName}</div>)}</div>;
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        editors: state.editor.editors
    };
}


export default connect<BootStrapperStateProps, any, any>(mapStateToProps, null)(EditorListContainer);