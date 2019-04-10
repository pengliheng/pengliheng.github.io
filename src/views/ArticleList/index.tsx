import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
// local
import Viewer from '../../components/Viewer'
import * as initPageWithTitleDecorator from '../../decorators/initPageWithTitleDecorator'
import { fetchArticleListSaga } from '../../redux-relate/actions/request'
import { ILabel, IProps, IStateProps } from './types'

import './index.scss'
// code

const mapStateToProps = ({ articleReducer, userReducer }: any) => ({
  articleReducer,
  userReducer,
})

// interface IProps {
//   fetchArticleListSaga: () => void
//   articleReducer: object
//   userReducer: object
// }

// interface ILabel {
//   color: string
//   name: string
// }

// @connect<IStateProps>(
//   mapStateToProps,
//   { fetchArticleListSaga },
// )
@initPageWithTitleDecorator('文章列表')
class ArticlePage extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchArticleListSaga()
  }
  render() {
    const user = _.get(this.props.userReducer, 'res.data.viewer', '')
    const article = _.get(
      this.props.articleReducer,
      'articleListHttpResponse.data.repositoryOwner.repository.issues.edges',
      [],
    )
    const LabelList = (labels: any) =>
      labels.node.labels.nodes.map((label: ILabel) => (
        <span
          className="ArticlePage__label"
          key={label.color}
          style={{ background: `#${label.color}` }}
        >
          {label.name}
        </span>
      ))
    const ArticleList = Array.prototype.slice
      .call(article)
      .reverse()
      .map((e, i) => (
        <Link
          to={{ hash: `#${e.node.title}`, pathname: '/articleDetail' }}
          className="ArticlePage__item"
          key={i}
        >
          <img src={e.node.author.avatarUrl} alt="头像" />
          <span className="ArticlePage__detail">
            <span className="ArticlePage__title">{e.node.title}</span>
            {LabelList(e)}
            <br />
            <span className="ArticlePage__name">{e.node.author.login}</span>
            {e.node.updatedAt}
          </span>
        </Link>
      ))
    return (
      <div className="ArticlePage">
        <Viewer title="文章列表" data={user} />
        <div className="ArticlePage__content">{ArticleList}</div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  (dispatch: Dispatch<any>) => ({ fetchArticleListSaga }),
)(ArticlePage)
