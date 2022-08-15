import { Routes, Route } from 'react-router-dom'
import LoginPage from './views/login'
import React from 'react'
import './App.css'
function App () {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}

export default App
