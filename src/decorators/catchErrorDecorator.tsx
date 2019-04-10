import axios from 'axios'
import * as React from 'react'
import Loading from '../components/Loading/index'
export default (WrappedComponent: React.Component) => {
  return class extends React.Component {
    constructor(props: object) {
      super(props)
      this.state = {
        error: false,
        loading: false,
      }
    }
    componentWillMount() {
      axios.interceptors.request.use(
        config => {
          this.setState({
            error: false,
            loading: true,
          })
          return config
        },
        error => {
          this.setState({
            error: true,
            loading: false,
          })
          return Promise.reject(error)
        },
      )
      axios.interceptors.response.use(
        (response: any) => {
          this.setState({
            error: false,
            loading: false,
          })
          return response
        },
        (error: any) => {
          this.setState({
            error: true,
            loading: false,
          })
          return Promise.reject(error)
        },
      )
    }
    render() {
      const { error, loading }: any = this.state
      if (error) {
        return <div>`请求出错了 \n ${error}`</div>
      } else if (loading) {
        return <Loading text="正在请求数据..." />
      } else {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}
