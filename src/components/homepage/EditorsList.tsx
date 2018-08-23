import * as React from 'react';

class StateProps {
    editors: Array<{ userName: string, countOfPoints: number, imageUrl: string }>;
}

class EditorsList extends React.Component<StateProps, {}>{
    render(){
      return <div className="">
        <p>Top Editors Today:</p>
        {this.props.editors.map(item => {
        return <div className="">
            <a href="#" className=""><img src="{item.imageUrl}" alt=""/></a>
            <span>{item.userName}</span>
            <span>{item.countOfPoints}</span>
        </div>
        })}
      </div>
    }
}
export default EditorsList