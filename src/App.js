import React from 'react'
import Form from './components/Form'
import Result from './components/Result'
import getStateFromStorage from './helpers/getStateFromStorage'
import saveStateToStorage from './helpers/saveStateToStorage'

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

    // calculate
    const actualMonthlyWorkedDays = (5 * 52 - bankHolidays - holidays) / 10
    const hoursInAMonth = (weeklyHours / 5) * actualMonthlyWorkedDays
    const minutesInAMonth = hoursInAMonth * 60
    const realPayPerMinute = monthlyIncome / minutesInAMonth
    const roundedPayPerMinute = realPayPerMinute.toFixed(3)
    const costinMinutes = Math.floor(itemCost / roundedPayPerMinute)

    const totalHours = Math.floor(costinMinutes / 60)
    const totalMinutes = costinMinutes % 60

    let result

    if (costinMinutes) {
      result = `${totalHours} hour(s) and ${totalMinutes} minutes`
    } else {
      result = 'Please enter valid values'
    }

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
