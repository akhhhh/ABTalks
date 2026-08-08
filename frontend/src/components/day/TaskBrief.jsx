import { Check, Code2 } from 'lucide-react'

export default function TaskBrief({ day }) {
  return (
    <section className="card task-brief">
      <span className="muted-label">THE BRIEF</span>
      <h2>What you're building</h2>
      <p>{day.brief}</p>
      <div className="requirements">
        <h3><Code2 size={17}/> Definition of done</h3>
        {day.requirements.map((r, i) => <div className="requirement" key={i}><Check size={15}/><span>{r}</span></div>)}
      </div>
    </section>
  )
}
