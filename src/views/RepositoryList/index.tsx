import * as _ from 'lodash'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
// local
import githubSvg from '../../assets/github.svg'
import forksSvg from '../../assets/stars.svg'
import Viewer from '../../components/Viewer/index'
import initPageWithTitleDecorator from '../../decorators/initPageWithTitleDecorator'
import { fetchRepositoryListSaga } from '../../redux-relate/actions/request'
import starsSvg from '../../stars.svg'
import { timeUtils } from '../../utils/time'
import { IProps } from './types'

import './index.scss'

const mapStateToProps = ({ userReducer, repositoryReducer }: any) => ({
  repositoryReducer,
  userReducer,
})

// @connect<IStateProps>(
//   mapStateToProps,
//   { fetchRepositoryListSaga },
// )
@initPageWithTitleDecorator('仓库列表')
class RepositoryPage extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchRepositoryListSaga()
  }
  render() {
    const user = _.get(this.props.userReducer, 'res.data.viewer', '')
    const repository = _.get(
      this.props.repositoryReducer,
      'repositoryListHttpResponse.data.repositoryOwner.repositories.edges',
      [],
    )
    const detailStyle = (e: any) => ({
      background: `${e.node.primaryLanguage && e.node.primaryLanguage.color}`,
    })
    const repositoryTopics = (e: any) =>
      e.node.repositoryTopics.edges.map((topic: any) => (
        <a
          className="RepositoryPage-topic__item"
          key={topic.node.url}
          href={topic.node.url}
        >
          {topic.node.topic.name}
        </a>
      ))
    const homePageIcon = (e: any) =>
      e.node.homepageUrl && (
        <a target="_blank" rel="noopener noreferrer" href={e.node.homepageUrl}>
          <span role="img" aria-label="websites">
            🌐
          </span>
        </a>
      )
    const githubIcon = (e: any) =>
      e.node.url && (
        <a
          className="RepositoryPage-link__item"
          rel="noopener noreferrer"
          target="_blank"
          href={e.node.url}
        >
          <img src={githubSvg} alt="Github" />
        </a>
      )
    const repositoryList = Array.prototype.slice
      .call(repository)
      .map((e: any, i: any) => (
        <div className="RepositoryPage__item" key={i}>
          <div className="RepositoryPage__item--left">
            <Link
              to={`/repositoryDetail#${e.node.nameWithOwner}`}
              className="RepositoryPage__name"
            >
              {e.node.nameWithOwner}
            </Link>
            <div className="RepositoryPage__description">
              {e.node.description}
            </div>
            <div className="RepositoryPage__detail">
              <span
                className="RepositoryPage__detail-language--color"
                style={detailStyle(e)}
              />
              <span className="RepositoryPage__detail-language--content">
                {e.node.primaryLanguage && e.node.primaryLanguage.name}
              </span>

              <span className="RepositoryPage__detail-stargazers">
                <img src={starsSvg} alt="stars" />
                <span className="RepositoryPage__detail-stargazers--text">
                  {e.node.stargazers && e.node.stargazers.totalCount}
                </span>
              </span>

              <span className="RepositoryPage__detail-stargazers">
                <img src={forksSvg} alt="forks" />
                <span className="RepositoryPage__detail-stargazers--text">
                  {e.node.forkCount}
                </span>
              </span>
            </div>
          </div>
          <div className="RepositoryPage__item--right">
            <span className="RepositoryPage-update">
              上次更新: {timeUtils(e.node.updatedAt)}
            </span>
            <span className="RepositoryPage-commitCount">
              提交次数:
              {e.node.object && e.node.object.history.totalCount}
            </span>

            <span className="RepositoryPage-link">
              {githubIcon(e)}
              {homePageIcon(e)}
            </span>
            <span className="RepositoryPage-topic">{repositoryTopics(e)}</span>
          </div>
        </div>
      ))
    return (
      <div className="RepositoryPage">
        <Viewer title="前端组件" data={user} />
        <div className="RepositoryPage__content">{repositoryList}</div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  (dispatch: Dispatch<any>) => ({ fetchRepositoryListSaga }),
)(RepositoryPage)
