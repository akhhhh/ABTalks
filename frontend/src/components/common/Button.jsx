import { Link } from 'react-router-dom'

export default function Button({ children, to, variant = 'primary', type = 'button', className = '', onClick, disabled }) {
  const classes = `btn btn-${variant} ${className}`
  if (to) return <Link to={to} className={classes}>{children}</Link>
  return <button type={type} className={classes} onClick={onClick} disabled={disabled}>{children}</button>
}
