import React from 'react'
import Form from './components/Form'

class App extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <Form monthlyAmount="" weeklyHours="40" />
      </div>
    )
  }
}

export default App
