import { ArrowRight, Clock3, Github, Linkedin } from 'lucide-react'
import Button from '../common/Button'

export default function TodayCard({ day }) {
  return (
    <div className="card today-card">
      <div className="today-top">
        <div><span className="day-badge">{String(day?.day_number || 12).padStart(2,'0')} · TODAY</span><h2>{day?.title || 'Today’s build'}</h2></div>
        <span className="difficulty">{day?.difficulty || 'Medium'}</span>
      </div>
      <p>{day?.description || 'Build something useful and document the work.'}</p>
      <div className="today-meta"><span><Clock3 size={15}/> ~{day?.estimated_minutes || 45} min</span><span><Github size={15}/> GitHub</span><span><Linkedin size={15}/> LinkedIn</span></div>
      <Button to={`/day/${day?.day_number || 12}`}>Open today’s task <ArrowRight size={16}/></Button>
    </div>
  )
}
