import { Flame, Bell } from 'lucide-react'

export default function WelcomeHeader({ student }) {
  // This calculates the date dynamically every time the component renders
  const today = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }).format(new Date()).toUpperCase().replace(',', ' ·');

  return (
    <div className="welcome-header">
      <div>
        <span className="muted-label">{today}</span>
        <h1>Keep building, {student?.name?.split(" ")[0] || "builder"}.</h1>
      </div>
      {/* ... rest of the component */}
    </div>
  );
}
