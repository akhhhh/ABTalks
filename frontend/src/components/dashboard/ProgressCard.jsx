import { Target } from 'lucide-react'

export default function ProgressCard({ student }) {
  const completed = student?.completed_days || 0
  const pct = Math.round((completed / 60) * 100)
  return (
    <div className="card progress-card">
      <div className="card-title-row">
        <div><span className="muted-label">CHALLENGE PROGRESS</span><h2>{completed} / 60 days</h2></div>
        <div className="circle-progress">{pct}%</div>
      </div>
      <div className="progress-track large"><span style={{width: `${pct}%`}} /></div>
      <div className="progress-footer"><span>Keep the chain alive.</span><b><Target size={14}/> {60 - completed} days left</b></div>
    </div>
  )
}
