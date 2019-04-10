import * as React from 'react'

export default (title: string) =>
  class WrappedComponent extends React.Component<any, any> {
    render() {
      document.title = title
      return <WrappedComponent />
    }
  }

// export default initPageWithTitleDecorator
