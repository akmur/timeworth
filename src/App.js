import React from 'react'
import Form from './components/Form'
import Result from './components/Result'
import Header from './components/Header'
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
    const result = calculateCost(
      this.state.weeklyHours,
      this.state.holidays,
      this.state.bankHolidays,
      this.state.monthlyIncome,
      this.state.itemCost
    )

    // show
    this.setState({
      totalHours: result.totalHours,
      totalMinutes: result.totalMinutes,
      showResult: result.showResult
    })
  }

  componentDidMount() {
    this.setState({ ...getStateFromStorage(), showResult: false })
  }

  render() {
    return (
      <section className="wrapper">
        <Header />
        <Form
          monthlyIncome={this.state.monthlyIncome}
          holidays={this.state.holidays}
          bankHolidays={this.state.bankHolidays}
          weeklyHours={this.state.weeklyHours}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Result showResult={this.state.showResult} totalHours={this.state.totalHours} totalMinutes={this.state.totalMinutes} />
      </section>
    )
  }
}

export default App
