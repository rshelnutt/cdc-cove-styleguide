import React from 'react'
import { BrowserRouter, Outlet } from 'react-router-dom'

import PageRoutes from './Routes'
import Sidebar from './components/styleguide/Sidebar'

import './styles/main.scss'

const App = () => {

  return (
    <div className="sg-container">
      <BrowserRouter>
        <Sidebar version={'4.22.1'}/>
        <div className="sg-content">
          <PageRoutes/>
        </div>
      </BrowserRouter>
      <Outlet/>
    </div>
  )
}

export default App
