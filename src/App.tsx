import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProposalPage from './components/ProposalPage'
import LovePage from './components/LovePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProposalPage />} />
        <Route path="/love" element={<LovePage />} />
      </Routes>
    </div>
  )
}

export default App
