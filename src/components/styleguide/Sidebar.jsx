import { NavLink, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../const'

import { ReactComponent as CoveLogo } from '../../images/cove-logo.svg'

const Sidebar = ({version}) => {
  let navigate = useNavigate();
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
          <button onClick={navigate('sb')}>View Storybook</button>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
