import type { NextPage } from 'next'
import useSwr from 'swr'
import type { DayType } from 'types'
import Day from 'components/Day'

const fetcher = (url:string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
  const {data = [], error} = useSwr('api/schedule', fetcher)

  return (
    <>
      {data.map((day: DayType) => (
        <Day day={day} key={day.Date}></Day>
      ))}
    </>
  )
}

export default Home
