import * as React from 'react'
import { ServiceArticle } from '../../store/article';
import { Article } from '../../service/entities';
import { StoreState } from '../../store';
import { connect } from 'react-redux';

class BootStrapperStateProps {
    articles: Article[];
}
class BootstraperDispatchProps {
  loadArticles: (id: string) => void;
}


const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
  return {
    loadArticles: (id) => {
        dispatch(ServiceArticle.loadArticles(id));
    }
  }
}

export class ArticlePage extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>{
    componentWillMount = () => {
        let id = this.props["match"]["params"]["id"];
        this.props.loadArticles(id);
    }

    render() {
        return <div className="content-wrapper">
        <h1>{this.props.articles[0] ? this.props.articles[0].title: ""}</h1>
        </div>
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        articles: state.article.articles
    };
  }
  
export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(ArticlePage);