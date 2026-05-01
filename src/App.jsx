import { useState } from 'react'
import './App.css'
import Landing from './Landing'
import Login from './Login'
import Home from './Home'

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleGetStarted = () => {
    setCurrentPage('login')
  }

  const handleLogin = (email) => {
    setUserEmail(email)
    setIsLoggedIn(true)
    setCurrentPage('home')
  }

  const handleLogout = () => {
    setUserEmail('')
    setIsLoggedIn(false)
    setCurrentPage('landing')
  }

  if (currentPage === 'home' && isLoggedIn) {
    return <Home userEmail={userEmail} onLogout={handleLogout} />
  }

  if (currentPage === 'login') {
    return <Login onLogin={handleLogin} onBack={() => setCurrentPage('landing')} />
  }

  return <Landing onGetStarted={handleGetStarted} />
}