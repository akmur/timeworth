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
      <main className="main">
        <form onSubmit={this.handleSubmit}>
          <div className="inputField has-tooltip">
            <label className="inputField__label" htmlFor="monthlyIncome">
              Monthly income
            </label>
            <div className="inputField__inputWrapper">
              <input
                className="inputField__input"
                id="monthlyIncome"
                placeholder="$$$$"
                type="text"
                defaultValue={this.props.monthlyIncome}
                onChange={this.handleChange}
                required
                className="inputField__input"
              />
              <Tooltip text="How much do you get per month? 🤑"/>
            </div>
          </div>
          <div className="inputField has-tooltip">
            <label className="inputField__label" htmlFor="weeklyHours">Weekly working hours</label>
            <div className="inputField__inputWrapper">
              <input
                className="inputField__input"
                id="weeklyHours"
                placeholder="40"
                type="text"
                defaultValue={this.props.weeklyHours}
                onChange={this.handleChange}
                required
                pattern="^(0|[1-9][0-9]*)$"
              />
              <Tooltip text="How many hours do you work per week? ⌛️"/>
            </div>
          </div>
          <div className="inputField has-tooltip">
            <label className="inputField__label" htmlFor="holidays">Days off per year</label>
            <div className="inputField__inputWrapper">
              <input
                className="inputField__input"
                id="holidays"
                placeholder="20"
                type="text"
                defaultValue={this.props.holidays}
                onChange={this.handleChange}
                pattern="^(0|[1-9][0-9]*)$"
              />
              <Tooltip text="How many days off can you take each year? 🏄‍♂️"/>
            </div>
          </div>
          <div className="inputField has-tooltip">
            <label className="inputField__label" htmlFor="bankHolidays">Bank holidays per year</label>
            <div className="inputField__inputWrapper">
              <input
                className="inputField__input"
                id="bankHolidays"
                placeholder="10"
                type="text"
                defaultValue={this.props.bankHolidays}
                onChange={this.handleChange}
                pattern="^(0|[1-9][0-9]*)$"
              />
              <Tooltip text="How many bank holidays do you have? 🎊"/>
            </div>
          </div>
          <div className="inputField has-tooltip">
            <label className="inputField__label" htmlFor="itemCost">Cost of the stuff</label>
            <div className="inputField__inputWrapper">
              <input
                className="inputField__input"
                id="itemCost"
                placeholder="$$$.$$"
                type="text"
                required
                onChange={this.handleChange}
              />
              <Tooltip text="How much does that stuff cost? 💰"/>
            </div>
          </div>
          <div className="submitField">
            <button className="button" id="submit" type="submit">Tell me now! 🤔</button>
          </div>
        </form>
      </main>
    )
  }
}

export default Form
