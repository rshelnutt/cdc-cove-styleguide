import { SELECT_OPTIONS } from '../components/data/datapoints'
import AnimatedPage from '../components/styleguide/AnimatedPage'
import Spacer from '../components/styleguide/Spacer'

const Inputs = () => {
  return (
    <AnimatedPage>
      <h1>Inputs</h1>

      <h2>Text</h2>
      <div className="sg-example">
        <div className="cdc-open-viz" style={{ maxWidth: '400px' }}>
          <input type="text" placeholder="Text goes here..."/>
        </div>
      </div>

      <hr/>

      <h2>Number</h2>
      <div className="sg-example">
        <div className="cdc-open-viz" style={{ maxWidth: '400px' }}>
          <input type="number" placeholder="12345.67"/>
        </div>
      </div>

      <hr/>

      <h2>Textarea</h2>
      <div className="sg-example">
        <div className="cdc-open-viz" style={{ maxWidth: '400px' }}>
          <textarea placeholder="The five boxing wizards jump quickly. Sphinx of black quartz, judge my vow. How vexingly quick daft zebras jump!"/>
        </div>
      </div>

      <hr/>

      <h2>Date</h2>
      <div className="sg-example">
        <div className="cdc-open-viz" style={{ maxWidth: '400px' }}>
          <input type="date"/>
        </div>
      </div>

      <hr/>

      <h2>Dropdown</h2>
      <div className="sg-example-group">
        <div className="sg-example">
          <div className="cdc-open-viz" style={{ maxWidth: '400px' }}>
            <select>
              {SELECT_OPTIONS.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="sg-example">
          <div className="cdc-open-viz" style={{ maxWidth: '400px' }}>
            <select className="input--small">
              {SELECT_OPTIONS.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <hr/>

      <h2>Checkbox</h2>
      <div className="sg-example">
        <div className="cdc-open-viz" style={{ maxWidth: '400px' }}>
          <div className="input-group">
            <div className="input-group--checkbox">
              <input type="checkbox" id="checkbox1"/>
              <label htmlFor="checkbox1">Option 1</label>
            </div>
            <div className="input-group--checkbox">
              <input type="checkbox" id="checkbox2"/>
              <label htmlFor="checkbox2">Option 2</label>
            </div>
            <div className="input-group--checkbox">
              <input type="checkbox" id="checkbox3"/>
              <label htmlFor="checkbox3">Option 3</label>
            </div>
          </div>

          <Spacer size={2}/>

          <div className="input-group">
            <div className="input-group--checkbox">
              <label htmlFor="checkbox4">Option 4</label>
              <input type="checkbox" id="checkbox4"/>
            </div>
            <div className="input-group--checkbox">
              <label htmlFor="checkbox5">Option 5</label>
              <input type="checkbox" id="checkbox5"/>
            </div>
            <div className="input-group--checkbox">
              <label htmlFor="checkbox6">Option 6</label>
              <input type="checkbox" id="checkbox6"/>
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <h2>Radio</h2>
      <div className="sg-example">
        <div className="cdc-open-viz" style={{ maxWidth: '400px' }}>
          <div className="input-group">
            <div className="input-group--radio">
              <input type="radio" id="radio1" name="radio"/>
              <label htmlFor="radio1">Option 1</label>
            </div>
            <div className="input-group--radio">
              <input type="radio" id="radio2" name="radio"/>
              <label htmlFor="radio2">Option 2</label>
            </div>
            <div className="input-group--radio">
              <input type="radio" id="radio3" name="radio"/>
              <label htmlFor="radio3">Option 3</label>
            </div>
          </div>

          <Spacer size={2}/>

          <div className="input-group">
            <div className="input-group--radio">
              <label htmlFor="radio4">Option 4</label>
              <input type="radio" id="radio4" name="radio2"/>
            </div>
            <div className="input-group--radio">
              <label htmlFor="radio5">Option 5</label>
              <input type="radio" id="radio5" name="radio2"/>
            </div>
            <div className="input-group--radio">
              <label htmlFor="radio6">Option 6</label>
              <input type="radio" id="radio6" name="radio2"/>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Inputs
