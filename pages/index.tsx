import type { NextPage } from 'next'
import useSwr from 'swr'
import type { DayType } from 'types'
import Day from 'components/Day'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
  const { data = [], error } = useSwr('api/schedule', fetcher)

  const todaysDate = new Date().toLocaleDateString('en-US').split('/')
  const todaysDateFormatted = `${todaysDate[2]}-${todaysDate[0]}-${todaysDate[1]}`
  const mondaysDate = setToMonday(new Date()).toLocaleDateString('en-US').split('/')
  const mondaysDateFormatted = `${mondaysDate[2]}-${mondaysDate[0]}-${mondaysDate[1]}`

  const todaysWorkout = data.find(
    (day: DayType) => day.Date === todaysDateFormatted
  )

  function setToMonday(date: Date) {
    const day = date.getDay() || 7

    if (day !== 1) date.setHours(-24 * (day - 1))

    return date
  }

  return (
    <main>
      <h1>Your workout schedule</h1>
      <section>
        <h2>Today's workout</h2>
        <Day day={todaysWorkout}></Day>
      </section>
      <section>
        <h2>Your week's schedule</h2>
        {data.map((day: DayType) => (
          <Day day={day} key={day.Date}></Day>
        ))}
      </section>
    </main>
  )
}

export default Home
