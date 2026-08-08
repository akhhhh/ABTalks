import { Flame, TrendingUp } from 'lucide-react'

export default function StreakCard({ student }) {
  const streak = student?.current_streak || 0
  return (
    <div className="streak-card">
      <div className="streak-copy">
        <span className="muted-label">CURRENT STREAK</span>
        <div className="streak-number">{streak}<small> days</small></div>
        {streak > 0 ? <p><TrendingUp size={15}/> You're building momentum.</p> : <p>Start today and make Day 1 count.</p>}
      </div>
      <div className="flame-circle"><Flame size={30} fill="currentColor"/></div>
    </div>
  )
}
