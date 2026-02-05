import React, { useState } from 'react'
import LovePopup from './LovePopup'
import WarningPopup from './WarningPopup'
import './ProposalPage.css'

const ProposalPage = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto' })
  const [showPopup, setShowPopup] = useState(false)
  const [showWarning, setShowWarning] = useState(false)

  const handleYes = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleCloseWarning = () => {
    setShowWarning(false)
  }

  const handleNoHover = () => {
    const positions = [
      { top: '10%', left: '80%' },
      { top: '80%', left: '10%' },
      { top: '70%', left: '70%' },
      { top: '20%', left: '20%' },
      { top: '60%', left: '15%' },
      { top: '15%', left: '60%' },
      { top: '85%', left: '50%' },
      { top: '50%', left: '85%' }
    ]
    
    const randomPosition = positions[Math.floor(Math.random() * positions.length)]
    setNoButtonPosition(randomPosition)
  }

  return (
    <div className="proposal-container">
      <div className="proposal-content">
        <h1 className="proposal-title">
          Hey Chudail 💕
        </h1>
        <p className="proposal-text">
          Will you be my Valentine?
        </p>
        <div className="romantic-subtitle">
          <p>You're the missing piece my heart has been searching for 💕</p>
          <p>Every love song I've ever heard suddenly makes sense because of you 🎵</p>
          <p>I want to write our story together, one beautiful chapter at a time 📖</p>
        </div>
        <div className="buttons-container">
          <button 
            className="yes-button"
            onClick={handleYes}
          >
            Yes 💖
          </button>
          <button 
            className="no-button"
            style={{
              position: noButtonPosition.top !== 'auto' ? 'fixed' : 'relative',
              top: noButtonPosition.top,
              left: noButtonPosition.left,
            }}
            onMouseEnter={handleNoHover}
            onClick={() => setShowWarning(true)}
          >
            No 😢
          </button>
        </div>
      </div>
      
      {showPopup && <LovePopup onClose={handleClosePopup} />}
      {showWarning && <WarningPopup onClose={handleCloseWarning} />}
    </div>
  )
}

export default ProposalPage