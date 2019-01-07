import React from 'react'

class Result extends React.Component {
  render() {
    return (
      <div>
        <div className="result">{this.props.result}</div>
      </div>
    )
  }
}

export default Result
