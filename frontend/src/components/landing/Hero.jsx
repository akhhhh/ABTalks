import { ArrowRight, Check, Flame, Github, Linkedin, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../common/Button'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot" /> 60 DAYS · 1 PUBLIC STREAK</div>
        <h1>Build in public.<br /><em>Become undeniable.</em></h1>
        <p className="hero-subtitle">
          A focused 60-day coding challenge for college students who want proof of skill, not just another certificate.
        </p>
        <div className="hero-actions">
          <Button to="/dashboard">Start the challenge <ArrowRight size={17} /></Button>
          <a className="text-link" href="#how-it-works">See how it works</a>
        </div>
        <div className="trust-row">
          <span><Check size={15}/> GitHub proof</span>
          <span><Check size={15}/> LinkedIn proof</span>
          <span><Check size={15}/> Recruiter-ready</span>
        </div>
      </div>

      <motion.div
        className="hero-card challenge-preview"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .55 }}
      >
        <div className="preview-top">
          <div>
            <span className="muted-label">YOUR CHALLENGE</span>
            <strong>60 Day Builder</strong>
          </div>
          <div className="streak-pill"><Flame size={16} fill="currentColor"/> 11 day streak</div>
        </div>
        <div className="preview-progress">
          <div className="progress-meta"><span>Day 12 of 60</span><b>20%</b></div>
          <div className="progress-track"><span style={{width:'20%'}} /></div>
        </div>
        <div className="preview-task">
          <span className="day-badge">DAY 12</span>
          <h3>Build a responsive pricing section</h3>
          <p>Turn a static design into a mobile-first component.</p>
          <div className="proof-mini">
            <span><Github size={15}/> Commit</span>
            <span><Linkedin size={15}/> Post</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
