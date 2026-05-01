import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import Landing from './Landing'
import Login from './Login'
import Home from './Home'

function AppRoutes() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleGetStarted = () => {
    navigate('/login')
  }

  const handleLogin = (email) => {
    setUserEmail(email)
    setIsLoggedIn(true)
    navigate('/home')
  }

  const handleLogout = () => {
    setUserEmail('')
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Routes>
      <Route path="/" element={<Landing onGetStarted={handleGetStarted} />} />
      <Route
        path="/login"
        element={<Login onLogin={handleLogin} onBack={() => navigate('/')} />}
      />
      <Route
        path="/home"
        element={
          isLoggedIn ? (
            <Home userEmail={userEmail} onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}