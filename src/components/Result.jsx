import styles from './Result.module.css'

export default function Result({ showResult, totalHours, totalMinutes }) {
  const hoursText = totalHours > 1 ? 'hours' : 'hour'
  const minutesText = totalMinutes > 1 ? 'minutes' : 'minute'
  const className = showResult ? `${styles.result} ${styles.visible}` : styles.result

  return (
    <section className={className}>
      <div className={styles.content}>
        {showResult ? (
          <>
            <div>
              To get that,
              <br />
              you should work: <br />
            </div>
            {totalHours ? (
              <div className={styles.hours}>
                {`${totalHours} ${hoursText}`}
              </div>
            ) : (
              ''
            )}
            <div>
              {totalHours ? 'and ' : ''}
              {`${totalMinutes} ${minutesText}`}
            </div>
            {totalHours > 100 ? (
              <div className={styles.small}>
                (Good luck with that. 👍)
              </div>
            ) : (
              ''
            )}
          </>
        ) : (
          'How long do you have to work to buy that?'
        )}
      </div>
    </section>
  )
}
