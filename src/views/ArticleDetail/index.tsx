// package
import * as _ from 'lodash'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
// local
import Viewer from '../../components/Viewer/index'
import initPageWithTitleDecorator from '../../decorators/initPageWithTitleDecorator'
import { fetchArticleDetailSaga } from '../../redux-relate/actions/request'
import './index.scss'
import { IProps, IStateProps } from './types'
// code

const keyWord = () => decodeURI(window.location.hash).replace(/^#/, '')
const mapStateToProps = ({ userReducer, articleReducer }: any) => ({
  articleReducer,
  userReducer,
})

// @connect<IStateProps>(
//   mapStateToProps,
//   { fetchArticleDetailSaga },
// )
@initPageWithTitleDecorator(keyWord())
class ArticleDetail extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchArticleDetailSaga(keyWord())
  }
  render() {
    const user = _.get(this.props.userReducer, 'res.data.viewer', '')
    const article = _.get(
      this.props.articleReducer,
      'articleDetailHttpResponse',
      '',
    )
    return (
      <div className="DetailPage">
        <Viewer title={article.title} data={user} />
        <div className="DetailPage__content">
          <ReactMarkdown className="markdown-body" source={article.body} />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  (dispatch: Dispatch<any>) => ({ fetchArticleDetailSaga }),
)(ArticleDetail)
