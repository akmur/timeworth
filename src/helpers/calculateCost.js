export default function(
  weeklyHours,
  holidays,
  bankHolidays,
  monthlyIncome,
  itemCost
) {
  // calculate
  const actualMonthlyWorkedDays = (5 * 52 - bankHolidays - holidays) / 10
  const hoursInAMonth = (weeklyHours / 7) * actualMonthlyWorkedDays
  const minutesInAMonth = hoursInAMonth * 60
  const realPayPerMinute = monthlyIncome / minutesInAMonth
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
