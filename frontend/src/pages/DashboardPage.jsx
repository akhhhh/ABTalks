import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Logo from '../components/common/Logo'
import BottomNav from '../components/common/BottomNav'
import WelcomeHeader from '../components/dashboard/WelcomeHeader'
import StreakCard from '../components/dashboard/StreakCard'
import ProgressCard from '../components/dashboard/ProgressCard'
import TodayCard from '../components/dashboard/TodayCard'
import AchievementRow from '../components/dashboard/AchievementRow'
import ProofChain from '../components/dashboard/ProofChain'
import { useStudent } from '../hooks/useStudent'
import { getDay } from '../services/api'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const { student, loading, error } = useStudent()
  const [day, setDay] = useState(null)

  useEffect(() => {
    getDay(student?.current_day || 12).then(setDay).catch(() => {})
  }, [student?.current_day])

  if (loading) return <div className="loading-screen"><div className="loader" /><span>Loading your challenge…</span></div>
  if (error) return <div className="error-screen">{error}</div>

  return (
    <div className="app-shell">
      <header className="app-header container">
        <Logo />
        <Link to="/" className="back-home">Exit challenge</Link>
      </header>
      <main className="dashboard container">
        <WelcomeHeader student={student} />
        <div className="dashboard-grid">
          <StreakCard student={student} />
          <ProgressCard student={student} />
          <TodayCard day={day} />
          <ProofChain day={day} />
          <AchievementRow student={student} />
          <div className="quote-card">
            <span>01</span>
            <p>“The goal isn't to become a 60-day coder. It's to become someone who ships.”</p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
