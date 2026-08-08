import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Logo from '../components/common/Logo'
import BottomNav from '../components/common/BottomNav'
import TaskHero from '../components/day/TaskHero'
import TaskBrief from '../components/day/TaskBrief'
import SubmissionForm from '../components/day/SubmissionForm'
import { getDay } from '../services/api'

export default function DayPage() {
  const { dayNumber } = useParams()
  const [day, setDay] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDay(dayNumber).then(setDay).finally(() => setLoading(false))
  }, [dayNumber])

  if (loading) return <div className="loading-screen"><div className="loader" /><span>Opening challenge day…</span></div>
  if (!day) return <div className="error-screen">Challenge day not found. <Link to="/dashboard">Back to dashboard</Link></div>

  return (
    <div className="app-shell">
      <header className="app-header container"><Logo /><span className="day-counter">12 / 60</span></header>
      <main className="day-page container">
        <TaskHero day={day} />
        <div className="day-layout">
          <div>
            <TaskBrief day={day} />
            <div className="tip-card"><CheckCircle2 size={20}/><div><strong>Ship small.</strong><p>If you can't finish everything, submit the smallest working version and improve tomorrow.</p></div></div>
          </div>
          <SubmissionForm day={day} onSubmitted={setDay} />
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
