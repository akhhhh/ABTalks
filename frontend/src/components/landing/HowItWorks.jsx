import { GitCommitHorizontal, Share2, Trophy } from 'lucide-react'

const steps = [
  { icon: GitCommitHorizontal, n: '01', title: 'Build something', text: 'One focused task every day. Small enough to finish, meaningful enough to show.' },
  { icon: Share2, n: '02', title: 'Prove the work', text: 'Connect your GitHub commit and LinkedIn post so your progress stays public.' },
  { icon: Trophy, n: '03', title: 'Stack your proof', text: 'After 60 days, your streak becomes a portfolio of consistent execution.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section container">
      <div className="section-heading">
        <span className="eyebrow">HOW IT WORKS</span>
        <h2>Consistency beats<br /><em>motivation.</em></h2>
      </div>
      <div className="steps-grid">
        {steps.map(({icon: Icon, n, title, text}) => (
          <article className="step-card" key={n}>
            <div className="step-number">{n}</div>
            <div className="icon-box"><Icon size={20}/></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
