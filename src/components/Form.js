import React from 'react'

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
          <fieldset id="forms__input">
            <legend>Input fields</legend>
            <div>
              <label htmlFor="monthlyIncome">Monthly Net Salary</label>{' '}
              <input
                id="monthlyIncome"
                placeholder="Monthly amount"
                type="text"
                defaultValue={this.props.monthlyIncome}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="weeklyHours">Weekly hours</label>{' '}
              <input
                id="weeklyHours"
                placeholder="Hours per week"
                type="text"
                defaultValue={this.props.weeklyHours}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="holidays">Number of holidays per year</label>{' '}
              <input
                id="holidays"
                placeholder="Number of holidays"
                type="text"
                defaultValue={this.props.holidays}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="itemCost">Cost of the Item</label>{' '}
              <input
                id="itemCost"
                placeholder="Cost of item"
                type="text"
                defaultValue="0"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input id="submit" type="submit" defaultValue="Calculate" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form
