import { NavLink } from 'react-router-dom'
import { ROUTES, ROOT_PATH } from '../../const'

import { ReactComponent as CoveLogo } from '../../images/cove-logo.svg'

const Sidebar = ({version}) => {

  return (
    <div className="sg-sidebar">
      <div className="sg-sidebar-version">
        <a href="https://github.com/CDCgov/cdc-open-viz" target="cdcCove">{version}</a>
      </div>
      <div className="sg-sidebar-logo">
        <CoveLogo/>
      </div>
      <nav className="sg-nav">
        <ul className="sg-sidenav">
          {ROUTES.map((route, index) => (
            <li className={"sg-sidenav--item"} key={index}>
              <NavLink className={({ isActive }) => "sg-sidenav--link" + (isActive ? " active" : "")} to={route.link}>{route.title}</NavLink>
            </li>
          ))}
          <li className={"sg-sidenav--item"}>
            <a href={`${location.protocol + '//' + location.host}${ROOT_PATH}/sb`} className="sg-sidenav--btn">View Docs</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
