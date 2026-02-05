import React from 'react'
import './WarningPopup.css'

const WarningPopup = ({ onClose }) => {
  return (
    <div className="warning-overlay">
      <div className="warning-content">
        <h2 className="warning-title">⚠️ Warning! ⚠️</h2>
        <p className="warning-text">
          You can't click No! If you click No, I will shoot you! 🔫
        </p>
        <p className="warning-text">
          Please click Yes instead! 💕
        </p>
        <button className="warning-button" onClick={onClose}>
          OK I'll Click Yes 💖
        </button>
      </div>
    </div>
  )
}

export default WarningPopup