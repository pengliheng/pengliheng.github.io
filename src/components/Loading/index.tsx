import * as React from 'react'

import loadingSvg from '../../assets/loading.svg'
import './index.scss'

interface IProps {
  text: string
}
export default class Loading extends React.Component<IProps> {
  static defaultProps = {
    text: '玩命加载中...',
  }

  render() {
    return (
      <div className="Loading">
        <img alt="loading" src={loadingSvg} />
        {this.props.text}
      </div>
    )
  }
}
