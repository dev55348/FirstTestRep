import * as React from 'react';

class StateProps {
    blogItems: Array<{ title: string, author: string, date: Date }>;
}

class BlogList extends React.Component<StateProps, {}>{
    render(){
      return <div className="col-2">
        <p>Featured Blogs:</p>
        {this.props.blogItems.map(item => {
        return <div className="">
            <a href="#" className="">{item.title}</a>
            <p>{item.author}</p>
            <p>{item.date.toLocaleDateString()}</p>
        </div>
        })}
      </div>
    }
}
export default BlogList