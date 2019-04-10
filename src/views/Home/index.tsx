import * as _ from 'lodash'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'
// const _ = lazy(() => import('lodash'))
// import ReactMarkdown from 'react-markdown'
import { Dispatch } from 'redux'

// local
import Viewer from '../../components/Viewer/index'
import initPageWithTitleDecorator from '../../decorators/initPageWithTitleDecorator'
import { fetchHomeSaga } from '../../redux-relate/actions/request'
import './index.scss'
import { IDispatchProps, IProps, IStateProps } from './types'
// import Loading from '../../components/Loading';
// code

const mapStateToProps = ({ homeReducer, userReducer }: any) => ({
  homeReducer,
  userReducer,
})

// @connect<IStateProps, IDispatchProps>(
//   mapStateToProps,
//   { fetchHomeSaga },
// )
@initPageWithTitleDecorator('首页')
class HomePage extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchHomeSaga()
  }
  render() {
    const user = _.get(this.props.userReducer, 'res.data.viewer', '')
    const homePage = _.get(
      this.props.homeReducer,
      'res.data.repositoryOwner.repository.object.text',
      '',
    )
    return (
      <div className="HomePage">
        <Viewer title="主页" data={user} />
        <ReactMarkdown
          className="markdown-body HomePage-markdown__body"
          source={homePage}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  (dispatch: Dispatch<any>) => ({ fetchHomeSaga }),
)(HomePage)
