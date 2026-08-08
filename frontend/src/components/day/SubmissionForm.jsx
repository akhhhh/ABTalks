import { useEffect, useState } from 'react'
import { Github, Linkedin, Rocket, Send, Save } from 'lucide-react'
import Button from '../common/Button'
import { submitDay } from '../../services/api'

export default function SubmissionForm({ day, onSubmitted }) {
  const key = `abtalks-day-${day.day_number}`
  const [form, setForm] = useState({ github_url: '', linkedin_url: '', deployment_url: '' })
  const [status, setStatus] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || 'null')
      if (saved) setForm(saved)
    } catch {}
  }, [key])

  function update(name, value) {
    const next = {...form, [name]: value}
    setForm(next)
    localStorage.setItem(key, JSON.stringify(next))
    setStatus('Draft saved locally')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.github_url || !form.linkedin_url) {
      setStatus('Add both GitHub and LinkedIn proof before submitting.')
      return
    }
    setSaving(true)
    setStatus('')
    try {
      const result = await submitDay(day.day_number, form)
      localStorage.removeItem(key)
      onSubmitted(result)
      setStatus('Submitted — Day complete. Nice work.')
    } catch {
      setStatus('Could not submit right now. Check that the API is running.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="card submission-card" onSubmit={handleSubmit}>
      <div className="submission-header">
        <div><span className="muted-label">PROVE YOUR WORK</span><h2>Submit today's proof</h2></div>
        <div className="save-badge"><Save size={14}/> Auto-saves</div>
      </div>
      <label><span><Github size={17}/> GitHub repository / commit *</span><input type="url" value={form.github_url} onChange={e => update('github_url', e.target.value)} placeholder="https://github.com/you/project/commit/..." /></label>
      <label><span><Linkedin size={17}/> LinkedIn post *</span><input type="url" value={form.linkedin_url} onChange={e => update('linkedin_url', e.target.value)} placeholder="https://linkedin.com/posts/..." /></label>
      <label><span><Rocket size={17}/> Live deployment <small>recommended</small></span><input type="url" value={form.deployment_url} onChange={e => update('deployment_url', e.target.value)} placeholder="https://your-project.vercel.app" /></label>
      <div className="submit-row">
        <span className={status.includes('complete') ? 'success-text' : 'form-status'}>{status}</span>
        <Button type="submit" disabled={saving}>{saving ? 'Submitting…' : <>Submit day <Send size={15}/></>}</Button>
      </div>
    </form>
  )
}
