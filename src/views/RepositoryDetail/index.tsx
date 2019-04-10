// package
import _ from 'lodash'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

// local
import Viewer from '../../components/Viewer/index'
import initPageWithTitleDecorator from '../../decorators/initPageWithTitleDecorator'
import { fetchRepositoryDetailSaga } from '../../redux-relate/actions/request'
import './index.scss'
import { IProps } from './types'

const mapStateToProps = ({ userReducer, repositoryReducer }: any) => ({
  repositoryReducer,
  userReducer,
})

const keyWord = () => decodeURI(window.location.hash).replace(/^#/, '')

// @connect<IStateProps>(
//   mapStateToProps,
//   { fetchRepositoryDetailSaga },
// )
@initPageWithTitleDecorator(keyWord())
class RepositoryDetail extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchRepositoryDetailSaga(keyWord())
  }
  render() {
    const user = _.get(this.props.userReducer, 'res.data.viewer', '')
    const repositoryText = _.get(
      this.props.repositoryReducer,
      'repositoryDetailHttpResponse.data.search.edges[0].node.object.text',
      '',
    )
    const nameWithOwner = _.get(
      this.props.repositoryReducer,
      'repositoryDetailHttpResponse.data.search.edges[0].node.nameWithOwner',
      '',
    )
    return (
      <div className="DetailPage">
        <Viewer title={nameWithOwner} data={user} />
        <div className="DetailPage__content">
          <ReactMarkdown className="markdown-body" source={repositoryText} />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  (dispatch: Dispatch<any>) => ({ fetchRepositoryDetailSaga }),
)(RepositoryDetail)
