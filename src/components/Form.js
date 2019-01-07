import React from 'react'

class Form extends React.Component {
  state = {}
  render() {
    console.log(this.props)
    return (
      <div>
        <fieldset id="forms__input">
          <legend>Input fields</legend>
          <p>
            <label htmlFor="input__text">Monthly Net Salary</label>{' '}
            <input id="input__text" placeholder="Monthly amount" type="text" />
          </p>
          <p>
            <label htmlFor="input__text">Weekly hours</label>{' '}
            <input
              id="input__text"
              placeholder="Hours per week"
              type="text"
              value={this.props.weeklyHours}
            />
          </p>
          <p>
            <label htmlFor="input__text">Cost of the Item</label>{' '}
            <input id="input__text" placeholder="Cost of item" type="text" />
          </p>
        </fieldset>
      </div>
    )
  }
}

export default Form
