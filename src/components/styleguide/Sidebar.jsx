import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../const'

import { ReactComponent as CoveLogo } from '../../images/cove-logo.svg'

const Sidebar = ({version}) => {
  return (
    <div className="sg-sidebar">
      <div className="sg-sidebar-version">
        <span>{version}</span>
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
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
