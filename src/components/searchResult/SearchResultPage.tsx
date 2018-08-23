import * as React from 'react'
import { RouteComponentProps } from 'react-router';

export default class SearchResultPage extends React.Component<{}, {}>{
    
    render() {
        let searchString = this.props["match"]["params"]["searchString"];
        return <div className="content-wrapper">
        <h1>{searchString}</h1>
        </div>
    }
}