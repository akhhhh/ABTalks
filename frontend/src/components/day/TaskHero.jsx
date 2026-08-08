import { ArrowLeft, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TaskHero({ day }) {
  return (
    <div className="day-hero">
      <Link to="/dashboard" className="back-link"><ArrowLeft size={16}/> Dashboard</Link>
      <div className="day-heading">
        <div><span className="day-badge">DAY {String(day.day_number).padStart(2,'0')}</span><span className="difficulty">{day.difficulty}</span></div>
        <h1>{day.title}</h1>
        <p>{day.description}</p>
        <span className="time"><Clock3 size={15}/> Estimated time: {day.estimated_minutes} minutes</span>
      </div>
    </div>
  )
}
