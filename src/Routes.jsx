import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Overview from './pages/Overview'
import Typography from './pages/Typography'
import Themes from './pages/Themes'
import Headings from './pages/Headings'
import Navigation from './pages/Navigation'
import Inputs from './pages/Inputs'
import Buttons from './pages/Buttons'
import Tooltips from './pages/Tooltips'
import Icons from './pages/Icons'

const PageRoutes = () => {
  const location = useLocation()
  const PATH = process.env.NODE_ENV === 'production' ? '/cdc-cove-styleguide' : ''

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path={`${PATH}/`} element={<Overview/>}/>
          <Route path={`${PATH}/typography`} element={<Typography/>}/>
          <Route path={`${PATH}/themes`} element={<Themes/>}/>
          <Route path={`${PATH}/headings`} element={<Headings/>}/>
          <Route path={`${PATH}/navigation`} element={<Navigation/>}/>
          <Route path={`${PATH}/inputs`} element={<Inputs/>}/>
          <Route path={`${PATH}/buttons`} element={<Buttons/>}/>
          <Route path={`${PATH}/tooltips`} element={<Tooltips/>}/>
          <Route path={`${PATH}/icons`} element={<Icons/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default PageRoutes
