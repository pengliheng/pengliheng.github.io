import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import catchErrorDecorator from './decorators/catchErrorDecorator'
import routes from './routes/index'

class Content extends React.Component<any, any> {
  render() {
    const routesComponent = routes.map((route: any) => (
      <Route key={route.path} {...route} />
    ))
    return <Switch>{routesComponent}</Switch>
  }
}
export default catchErrorDecorator(Content)
