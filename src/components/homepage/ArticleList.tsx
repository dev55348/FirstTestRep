import * as React from 'react';

class StateProps {
    articleItems: Array<{ name: string }>;
}

class ArticleList extends React.Component<StateProps, {}>{
    render(){
      return <div className="col-2">
        <p>Learn Something New:</p>
        {this.props.articleItems.map(item => {
        return <div className="">
            <a href="#" className="">{item.name}</a>
        </div>
        })}
      </div>
    }
}
export default ArticleList