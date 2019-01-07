function retrieveData(key) {
  return localStorage.getItem(key) ? localStorage.getItem(key) : 0
}

export default function() {
  const localStorageState = {
    weeklyHours: retrieveData('weeklyHours'),
    monthlyIncome: retrieveData('monthlyIncome'),
    holidays: retrieveData('holidays')
  }

  return localStorageState
}
