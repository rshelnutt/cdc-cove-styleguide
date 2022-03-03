import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ROOT_PATH } from './const'

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

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path={`${ROOT_PATH}/`} element={<Overview/>}/>
          <Route path={`${ROOT_PATH}/typography`} element={<Typography/>}/>
          <Route path={`${ROOT_PATH}/themes`} element={<Themes/>}/>
          <Route path={`${ROOT_PATH}/headings`} element={<Headings/>}/>
          <Route path={`${ROOT_PATH}/navigation`} element={<Navigation/>}/>
          <Route path={`${ROOT_PATH}/inputs`} element={<Inputs/>}/>
          <Route path={`${ROOT_PATH}/buttons`} element={<Buttons/>}/>
          <Route path={`${ROOT_PATH}/tooltips`} element={<Tooltips/>}/>
          <Route path={`${ROOT_PATH}/icons`} element={<Icons/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default PageRoutes
