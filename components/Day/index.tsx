import type { DayType } from 'types';

export default function Day({ day }: { day: DayType }) {
  return (
    <div>
      <h3>{day?.['Day of Week']}</h3>
      <p>Type: {day?.['Workout Type']}</p>
      {day?.['Planned Miles'] && <p>Planned miles: {day?.['Planned Miles']}</p>}
      {day?.['Workout Description'] && (
        <blockquote>
          <p>Noah says: {day?.['Workout Description']}</p>
        </blockquote>
      )}
    </div>
  )
}
