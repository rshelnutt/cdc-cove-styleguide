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
          <Route path="/cdc-cove-styleguide" element={<Overview/>}/>
          <Route path="/cdc-cove-styleguide/typography" element={<Typography/>}/>
          <Route path="/cdc-cove-styleguide/themes" element={<Themes/>}/>
          <Route path="/cdc-cove-styleguide/headings" element={<Headings/>}/>
          <Route path="/cdc-cove-styleguide/navigation" element={<Navigation/>}/>
          <Route path="/cdc-cove-styleguide/inputs" element={<Inputs/>}/>
          <Route path="/cdc-cove-styleguide/buttons" element={<Buttons/>}/>
          <Route path="/cdc-cove-styleguide/tooltips" element={<Tooltips/>}/>
          <Route path="/cdc-cove-styleguide/icons" element={<Icons/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default PageRoutes
