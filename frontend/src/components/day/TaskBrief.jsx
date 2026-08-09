import { Check, Code2 } from 'lucide-react'

export default function TaskBrief({ day }) {
  if (!day) {
    return (
      <section className="card task-brief">
        <span className="muted-label">THE BRIEF</span>
        <h2>Loading task...</h2>
        <p>Loading today's challenge...</p>
      </section>
    )
  }

  const requirements = Array.isArray(day.requirements)
    ? day.requirements
    : []

  return (
    <section className="card task-brief">
      <span className="muted-label">THE BRIEF</span>

      <h2>What you're building</h2>

      <p>
        {day.brief || 'No task description available.'}
      </p>

      <div className="requirements">
        <h3>
          <Code2 size={17} />
          Definition of done
        </h3>

        {requirements.length > 0 ? (
          requirements.map((requirement, index) => (
            <div className="requirement" key={index}>
              <Check size={15} />
              <span>{requirement}</span>
            </div>
          ))
        ) : (
          <p className="empty-requirements">
            No requirements available yet.
          </p>
        )}
      </div>
    </section>
  )
}