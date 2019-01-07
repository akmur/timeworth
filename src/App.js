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
    const monthlyIncome = this.state.monthlyIncome
    const itemCost = this.state.itemCost

    // calculate
    const actualMonthlyWorkedDays = (5 * 52 - 10 - holidays) / 12 // 19,1
    const hoursInAMonth = (weeklyHours / 5) * actualMonthlyWorkedDays // 153
    const minutesInAMonth = hoursInAMonth * 60 // 9180
    const realPayPerMinute = monthlyIncome / minutesInAMonth // 0,32
    const roundedPayPerMinute = realPayPerMinute.toFixed(3) // 0,327 > pay per minute
    const costinMinutes = Math.floor(itemCost / roundedPayPerMinute) // 91

    const totalHours = Math.floor(costinMinutes / 60)
    const totalMinutes = costinMinutes % 60

    const result = `${totalHours} hour(s) and ${totalMinutes} minutes`

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
