import type { NextPage } from 'next'
import useSwr from 'swr'
import type { DayType } from 'types'
import Day from 'components/Day'

const fetcher = (url:string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
  const {data = [], error} = useSwr('api/schedule', fetcher)

  let todaysDate = new Date().toLocaleDateString('en-US').split('/')
  let todaysDateFormatted = `${todaysDate[2]}-${todaysDate[0]}-${todaysDate[1]}`
  let todaysWorkout = data.find((day: DayType) => day.Date === todaysDateFormatted)

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
