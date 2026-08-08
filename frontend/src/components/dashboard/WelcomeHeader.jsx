import { Flame, Bell } from 'lucide-react'

export default function WelcomeHeader({ student }) {
  return (
    <div className="welcome-header">
      <div>
        <span className="muted-label">SATURDAY · AUG 8</span>
        <h1>Keep building, {student?.name?.split(' ')[0] || 'builder'}.</h1>
      </div>
      <div className="avatar-wrap">
        <button className="icon-button" aria-label="Notifications"><Bell size={19}/><i /></button>
        <div className="avatar">{student?.name?.split(' ').map(x => x[0]).join('').slice(0,2) || 'AB'}</div>
      </div>
    </div>
  )
}
