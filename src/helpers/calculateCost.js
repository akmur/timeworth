export default function(
  weeklyHours,
  holidays,
  bankHolidays,
  monthlyIncome,
  itemCost
) {
  const averageDaysInAMonth = 30.436
  const workedDailyHours = (Math.floor(weeklyHours) / 7)
  const workedMonthlyHours = workedDailyHours * averageDaysInAMonth
  const monthlyHolidaysHours = ((bankHolidays + holidays) / 12) * workedDailyHours
  const actualHoursInAMonth = workedMonthlyHours - monthlyHolidaysHours
  const actualMinutesInAMonth = actualHoursInAMonth * 60
  const realPayPerMinute = monthlyIncome / actualMinutesInAMonth
  const roundedPayPerMinute = realPayPerMinute.toFixed(3)
  const costinMinutes = Math.floor(itemCost / roundedPayPerMinute)

  const totalHours = Math.floor(costinMinutes / 60)
  const totalMinutes = costinMinutes % 60

  const showResult = costinMinutes ? true : false

  return {
    totalHours,
    totalMinutes,
    showResult
  }
}


