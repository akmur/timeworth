function retrieveData(key) {
  let defaultValue

  switch (key) {
    case 'weeklyHours':
      defaultValue = 40
      break
    case 'monthlyIncome':
      defaultValue = 0
      break
    case 'holidays':
      defaultValue = 20
      break
    case 'bankHolidays':
      defaultValue = 10
      break
    default:
      break
  }
  return localStorage.getItem(key) ? localStorage.getItem(key) : defaultValue
}

export default function() {
  const localStorageState = {
    weeklyHours: retrieveData('weeklyHours'),
    monthlyIncome: retrieveData('monthlyIncome'),
    holidays: retrieveData('holidays'),
    bankHolidays: retrieveData('bankHolidays')
  }

  return localStorageState
}
