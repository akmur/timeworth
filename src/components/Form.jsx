import Tooltip from './Tooltip'
import styles from './Form.module.css'

export default function Form({ monthlyIncome, holidays, bankHolidays, weeklyHours, handleChange, handleSubmit, showResult }) {
  const onSubmit = (event) => {
    event.preventDefault()
    handleSubmit(event)
  }

  const mainClass = showResult ? `${styles.main} ${styles.hidden}` : styles.main

  return (
    <main className={mainClass}>
      <form onSubmit={onSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="monthlyIncome">
            Monthly income
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              id="monthlyIncome"
              placeholder="$$$$"
              type="text"
              defaultValue={monthlyIncome}
              onChange={handleChange}
              required
            />
            <Tooltip text="How much do you get per month? 🤑" />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="weeklyHours">Weekly working hours</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              id="weeklyHours"
              placeholder="40"
              type="text"
              defaultValue={weeklyHours}
              onChange={handleChange}
              required
              pattern="^(0|[1-9][0-9]*)$"
            />
            <Tooltip text="How many hours do you work per week? ⌛️" />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="holidays">Days off per year</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              id="holidays"
              placeholder="20"
              type="text"
              defaultValue={holidays}
              onChange={handleChange}
              pattern="^(0|[1-9][0-9]*)$"
            />
            <Tooltip text="How many days off can you take each year? 🏄‍♂️" />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="bankHolidays">Bank holidays per year</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              id="bankHolidays"
              placeholder="10"
              type="text"
              defaultValue={bankHolidays}
              onChange={handleChange}
              pattern="^(0|[1-9][0-9]*)$"
            />
            <Tooltip text="How many bank holidays do you have? 🎊" />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="itemCost">Cost of the stuff</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              id="itemCost"
              placeholder="$$$.$$"
              type="text"
              required
              onChange={handleChange}
            />
            <Tooltip text="How much does that stuff cost? 💰" />
          </div>
        </div>
        <div className={styles.submitField}>
          <button className={styles.button} id="submit" type="submit">Tell me now! 🤔</button>
        </div>
      </form>
    </main>
  )
}
