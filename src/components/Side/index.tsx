import * as React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../../routes/index'
import './index.scss'

const routesComponent = routes
  .filter((route: any) => route.content)
  .map((route: any) => (
    <NavLink
      key={route.path}
      exact={route.exact}
      to={route.path}
      className="Side__nav-item"
    >
      <i className="icon icon-dashboard" />
      {route.content}
    </NavLink>
  ))

export default () => (
  <div className="Side__container">
    <div className="Side__nav">{routesComponent}</div>
  </div>
)
