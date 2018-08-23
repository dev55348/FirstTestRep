import * as React from 'react'
import { ServiceEditor } from '../../store/editor';
import { Editor } from 'service/entities';
import { StoreState } from '../../store';
import { connect } from 'react-redux';

class BootStrapperStateProps {
    editor: Editor[];
}
class BootstraperDispatchProps {
  loadEditors: (id: string) => void;
}


const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
  return {
    loadEditors: (id) => {
        dispatch(ServiceEditor.loadEditors(id));
    }
  }
}

export class EditorPage extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>{
    componentWillMount = () => {
        let id = this.props["match"]["params"]["id"];
        this.props.loadEditors(id);
    }

    render() {
        return <div className="content-wrapper">
        <h1>{this.props.editor[0] ? this.props.editor[0].firstName: ""}</h1>
        </div>
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        editor: state.editor.editors
    };
  }
  
export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(EditorPage);