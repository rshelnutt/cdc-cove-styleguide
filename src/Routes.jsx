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

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Overview/>}/>
          <Route path="typography" element={<Typography/>}/>
          <Route path="themes" element={<Themes/>}/>
          <Route path="headings" element={<Headings/>}/>
          <Route path="navigation" element={<Navigation/>}/>
          <Route path="inputs" element={<Inputs/>}/>
          <Route path="buttons" element={<Buttons/>}/>
          <Route path="tooltips" element={<Tooltips/>}/>
          <Route path="icons" element={<Icons/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default PageRoutes
