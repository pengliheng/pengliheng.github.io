// package
import * as React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import { Dispatch } from 'redux'

// local
import Loading from './components/Loading/index'
import Content from './content'
import { fetchUserSaga } from './redux-relate/actions/request'
import { IProps, IStateProps } from './types'
// import Layout from '@/components/Layout'

const lazy = (React as any).lazy
const Suspense = (React as any).Suspense
const Layout = withRouter(lazy(() => import('./components/Layout')))

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({ fetchUserSaga })

// export interface IDispatchProps {
//   fetchUserSaga: (dispatch: Dispatch<any>) => { default: any }
// }

// @connect<IStateProps, IDispatchProps>(
//   null,
//   { fetchUserSaga },
// )
class App extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchUserSaga()
  }
  render() {
    return (
      <Router>
        <Suspense
          maxDuration={300}
          fallback={<Loading text="页面玩命加载中..." />}
        >
          <Layout>
            <Content />
          </Layout>
        </Suspense>
      </Router>
    )
  }
}

export default connect(
  null,
  (dispatch: Dispatch<any>) => ({ fetchUserSaga }),
)(App)
