import { useEffect, useState } from 'react'
import { getStudent } from '../services/api'

export function useStudent() {
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    getStudent()
      .then(data => active && setStudent(data))
      .catch(() => active && setError('Could not load your challenge data.'))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, [])

  return { student, loading, error, setStudent }
}
