import type { DayType } from 'types';

export default function Day({ day }: { day: DayType }) {
  return (
      <div>
        <h2>{day['Day of Week']}</h2>
        <p>Type: {day['Workout Type']}</p>
        {day['Planned Miles'] && <p>Planned miles: {day['Planned Miles']}</p>}
        {day['Workout Description'] && (
          <div>
            <blockquote>
              <p>Noah says: {day['Workout Description']}</p>
            </blockquote>
          </div>
        )}
      </div>
  )
}
