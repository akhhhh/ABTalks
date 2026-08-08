import { ArrowUpRight, Menu } from 'lucide-react'
import Logo from '../components/common/Logo'
import Button from '../components/common/Button'
import Hero from '../components/landing/Hero'
import HowItWorks from '../components/landing/HowItWorks'
import StatsStrip from '../components/landing/StatsStrip'

export default function LandingPage() {
  return (
    <div className="site-shell">
      <header className="site-header container">
        <Logo />
        <nav className="desktop-nav">
          <a href="#how-it-works">How it works</a>
          <a href="#why">Why ABTalks</a>
        </nav>
        <div className="header-actions">
          <Button to="/dashboard" variant="ghost">Log in</Button>
          <Button to="/dashboard">Join challenge <ArrowUpRight size={15}/></Button>
        </div>
        <button className="mobile-menu" aria-label="Open menu"><Menu size={22}/></button>
      </header>
      <main>
        <Hero />
        <StatsStrip />
        <HowItWorks />
        <section id="why" className="closing container">
          <div className="closing-card">
            <span className="eyebrow">YOUR FUTURE SELF</span>
            <h2>60 days from now,<br /><em>you'll have receipts.</em></h2>
            <p>Not promises. Not a list of tutorials. A visible trail of things you actually built.</p>
            <Button to="/dashboard">Enter the challenge <ArrowUpRight size={16}/></Button>
          </div>
        </section>
      </main>
      <footer className="footer container"><Logo /><span>Build daily. Show your work.</span><span>© 2026 ABTalks</span></footer>
    </div>
  )
}
