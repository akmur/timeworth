import React from 'react'
import Tooltip from './Tooltip'

class Form extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(event)
  }

  handleChange = event => {
    this.props.handleChange(event)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="inputField">
            <label className="inputField__label" htmlFor="monthlyIncome">
              Monthly income
            </label>
            <div className="inputField__inputWrapper">
              <input
                id="monthlyIncome"
                placeholder="$$$$"
                type="text"
                defaultValue={this.props.monthlyIncome}
                onChange={this.handleChange}
                required
                className="inputField__input"
              />
              <Tooltip text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, velit!"/>
            </div>
          </div>
          <div className="inputField">
            <label className="inputField__label" htmlFor="weeklyHours">Weekly hours</label>
            <div className="inputField__inputWrapper">
              <input
                id="weeklyHours"
                placeholder="40"
                type="text"
                defaultValue={this.props.weeklyHours}
                onChange={this.handleChange}
                required
                pattern="^(0|[1-9][0-9]*)$"
              />
              <Tooltip text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, velit!"/>
            </div>
          </div>
          <div className="inputField">
            <label className="inputField__label" htmlFor="holidays">Holidays per year</label>
            <div className="inputField__inputWrapper">
              <input
                id="holidays"
                placeholder="20"
                type="text"
                defaultValue={this.props.holidays}
                onChange={this.handleChange}
                pattern="^(0|[1-9][0-9]*)$"
              />
              <Tooltip text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, velit!"/>
            </div>
          </div>
          <div className="inputField">
            <label className="inputField__label" htmlFor="bankHolidays">Bank holidays per year</label>
            <div className="inputField__inputWrapper">
              <input
                id="bankHolidays"
                placeholder="10"
                type="text"
                defaultValue={this.props.bankHolidays}
                onChange={this.handleChange}
                pattern="^(0|[1-9][0-9]*)$"
              />
              <Tooltip text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, velit!"/>
            </div>
          </div>
          <div className="inputField">
            <label className="inputField__label" htmlFor="itemCost">Cost of the stuff</label>
            <div className="inputField__inputWrapper">
              <input
                id="itemCost"
                placeholder="$$$.$$"
                type="text"
                defaultValue="0"
                onChange={this.handleChange}
              />
              <Tooltip text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, velit!"/>
            </div>
          </div>
          <div className="submitField">
            <input id="submit" type="submit" defaultValue="Tell me now" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form
