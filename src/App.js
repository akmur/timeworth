import React from 'react'
import Form from './components/Form'
import Result from './components/Result'
import getStateFromStorage from './helpers/getStateFromStorage'
import saveStateToStorage from './helpers/saveStateToStorage'
import calculateCost from './helpers/calculateCost'

class App extends React.Component {
  state = {}

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })

    saveStateToStorage(event.target.id, event.target.value)
  }

  handleSubmit = event => {
    // get data from all state fields
    const weeklyHours = this.state.weeklyHours
    const holidays = this.state.holidays
    const bankHolidays = this.state.bankHolidays
    const monthlyIncome = this.state.monthlyIncome
    const itemCost = this.state.itemCost

    const result = calculateCost(
      weeklyHours,
      holidays,
      bankHolidays,
      monthlyIncome,
      itemCost
    )

    // show
    this.setState({
      result: result
    })
  }

  componentDidMount() {
    this.setState(getStateFromStorage())
  }

  render() {
    return (
      <div>
        <Form
          monthlyIncome={this.state.monthlyIncome}
          holidays={this.state.holidays}
          bankHolidays={this.state.bankHolidays}
          weeklyHours={this.state.weeklyHours}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Result result={this.state.result} />
      </div>
    )
  }
}

export default App
