import { Award, Check, LockKeyhole } from 'lucide-react'

export default function AchievementRow({ student }) {
  const achievements = [
    { title: 'First Commit', text: 'Completed your first proof', unlocked: (student?.completed_days || 0) >= 1 },
    { title: '7 Day Run', text: 'Built for a full week', unlocked: (student?.current_streak || 0) >= 7 },
    { title: 'Halfway Hero', text: '30 challenge days complete', unlocked: (student?.completed_days || 0) >= 30 },
  ]
  return (
    <div className="card achievements">
      <div className="card-title-row"><div><span className="muted-label">ACHIEVEMENTS</span><h2>Proof worth showing</h2></div><Award size={22}/></div>
      {achievements.map(a => (
        <div className={`achievement ${a.unlocked ? 'unlocked' : ''}`} key={a.title}>
          <div className="achievement-icon">{a.unlocked ? <Check size={17}/> : <LockKeyhole size={16}/>}</div>
          <div><strong>{a.title}</strong><span>{a.text}</span></div>
          {a.unlocked && <b>Unlocked</b>}
        </div>
      ))}
    </div>
  )
}
