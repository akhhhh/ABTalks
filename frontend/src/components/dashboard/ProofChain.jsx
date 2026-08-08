import { CheckCircle2, CircleDashed, GitCommitHorizontal, Linkedin, Rocket } from 'lucide-react'

export default function ProofChain({ day }) {
  const submitted = !!day?.submission
  const github = !!day?.submission?.github_url
  const linkedin = !!day?.submission?.linkedin_url
  const deploy = !!day?.submission?.deployment_url
  const item = (done, Icon, title, text) => (
    <div className="proof-step">
      <div className={`proof-icon ${done ? 'done' : ''}`}>{done ? <CheckCircle2 size={18}/> : <Icon size={18}/>}</div>
      <div><strong>{title}</strong><span>{done ? 'Added' : text}</span></div>
    </div>
  )
  return (
    <div className="card proof-card">
      <div className="card-title-row"><div><span className="muted-label">SMART CHECKLIST</span><h2>Proof chain</h2></div><span className="mini-status">{submitted ? 'Submitted' : 'In progress'}</span></div>
      <p className="card-note">Three signals turn today's work into public proof.</p>
      {item(github, GitCommitHorizontal, 'GitHub commit', 'Add your repository or commit')}
      {item(linkedin, Linkedin, 'LinkedIn post', 'Share what you built')}
      {item(deploy, Rocket, 'Live deployment', 'Optional but recommended')}
    </div>
  )
}
