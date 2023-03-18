// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeEvent = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg-container">
        <div className="letters-Container">
          <div className="Descript-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="letters" className="label">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              id="letters"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.onChangeEvent}
            />
            <div className="counter-container">
              <p className="para">No.of letters: {inputPhrase.length}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt=" letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
