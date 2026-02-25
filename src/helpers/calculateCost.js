export default function(
  weeklyHours,
  holidays,
  bankHolidays,
  monthlyIncome,
  itemCost
) {
  const hours = Number(weeklyHours) || 0
  const income = Number(monthlyIncome) || 0
  const cost = Number(itemCost) || 0
  const totalDaysOff = (Number(holidays) || 0) + (Number(bankHolidays) || 0)

  if (hours <= 0 || income <= 0 || cost <= 0) {
    return { totalHours: 0, totalMinutes: 0, showResult: false }
  }

  const dailyHours = hours / 5
  const annualWorkedHours = (52 * hours) - (totalDaysOff * dailyHours)
  const monthlyWorkedMinutes = (annualWorkedHours / 12) * 60
  const payPerMinute = income / monthlyWorkedMinutes
  const costInMinutes = Math.floor(cost / payPerMinute)

  const totalHours = Math.floor(costInMinutes / 60)
  const totalMinutes = costInMinutes % 60

  return {
    totalHours,
    totalMinutes,
    showResult: costInMinutes > 0
  }
}


