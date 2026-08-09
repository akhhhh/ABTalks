import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://ab-talks-jjsv.vercel.app/api',
  timeout: 8000,
})

export async function getStudent() {
  const { data } = await api.get('/student')
  return data
}

export async function getDay(dayNumber) {
  const { data } = await api.get(`/days/${dayNumber}`)
  return data
}

export async function submitDay(dayNumber, payload) {
  const { data } = await api.post(`/days/${dayNumber}/submit`, payload)
  return data
}

export default api
