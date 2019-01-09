import React from 'react'
import InfoCircle from './InfoCircle'

class Tooltip extends React.Component {
  render() {
    return (
      <div className="inputField__tooltip">
        <div className="tooltip">
          <div className="tooltip__icon">
            <InfoCircle />
          </div>
          <div className="tooltip__text">{this.props.text}</div>
        </div>
      </div>
    )
  }
}

export default Tooltip
