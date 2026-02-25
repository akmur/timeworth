import { useState, useEffect } from 'react'
import Form from './components/Form'
import Result from './components/Result'
import Header from './components/Header'
import getStateFromStorage from './helpers/getStateFromStorage'
import saveStateToStorage from './helpers/saveStateToStorage'
import calculateCost from './helpers/calculateCost'
import styles from './App.module.css'

export default function App() {
  const [formData, setFormData] = useState({})
  const [result, setResult] = useState({ showResult: false, totalHours: 0, totalMinutes: 0 })

  useEffect(() => {
    setFormData({ ...getStateFromStorage() })
  }, [])

  const handleChange = (event) => {
    const { id, value } = event.target
    setFormData(prev => ({ ...prev, [id]: value }))
    saveStateToStorage(id, value)
  }

  const handleSubmit = () => {
    const { totalHours, totalMinutes, showResult } = calculateCost(
      formData.weeklyHours,
      formData.holidays,
      formData.bankHolidays,
      formData.monthlyIncome,
      formData.itemCost
    )
    setResult({ totalHours, totalMinutes, showResult })
  }

  return (
    <section className={styles.wrapper}>
      <Header />
      <Form
        monthlyIncome={formData.monthlyIncome}
        holidays={formData.holidays}
        bankHolidays={formData.bankHolidays}
        weeklyHours={formData.weeklyHours}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showResult={result.showResult}
      />
      <Result
        showResult={result.showResult}
        totalHours={result.totalHours}
        totalMinutes={result.totalMinutes}
      />
    </section>
  )
}
