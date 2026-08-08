import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="ABTalks home">
      <span className="logo-mark">A</span>
      <span>ABTalks</span>
    </Link>
  )
}
