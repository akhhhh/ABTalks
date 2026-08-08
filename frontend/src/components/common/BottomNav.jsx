import { Home, CalendarDays, UserRound } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/dashboard" className={({isActive}) => isActive ? 'bottom-item active' : 'bottom-item'}>
        <Home size={19} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/day/12" className={({isActive}) => isActive ? 'bottom-item active' : 'bottom-item'}>
        <CalendarDays size={19} />
        <span>Challenge</span>
      </NavLink>
      <button className="bottom-item" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <UserRound size={19} />
        <span>Profile</span>
      </button>
    </nav>
  )
}
