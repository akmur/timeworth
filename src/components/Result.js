import React from 'react'

class Result extends React.Component {
  render() {
    const totalHours = this.props.totalHours
    const totalMinutes = this.props.totalMinutes
    const hoursText = totalHours > 1 ? 'hours' : 'hour'
    const minutesText = totalMinutes > 1 ? 'minutes' : 'minute'

    if (this.props.showResult) {
      return (
        <section className="resultSentence">
          <div className="resultSentence__content">
            <div>
              To get that,<br />
              you should work: <br />
            </div>
            {
              totalHours ? (
                <div className="resultSentence__hours">
                  { `${totalHours} ${hoursText}` }
                </div>
              ) : ('')
            }
            <div className="resultSentence__minutes">
              { totalHours ? ('and ') : ('') }
              { `${totalMinutes} ${minutesText}` }
            </div>
            {
              totalHours > 100 ? (
                <div className="resultSentence__small">
                  (Good luck with that. 👍)
                </div>
              ) : ('')
            }
          </div>
        </section>
      )
    } else {
      return (
        <section className="resultSentence">
          <div className="resultSentence__content">
            How long do I have to work to buy that?
          </div>
        </section>
      )
    }
  }
}

export default Result
