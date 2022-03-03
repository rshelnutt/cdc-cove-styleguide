import AccordionPanel from '../components/open-viz/AccordionPanel'
import AnimatedPage from '../components/styleguide/AnimatedPage'

const Navigation = () => {
  return (
    <AnimatedPage>
      <h1>Navigation</h1>
      <h2>Accordion</h2>

      <div className="sg-example">
        <div className="cdc-open-viz">
          <AccordionPanel/>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Navigation
