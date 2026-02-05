import React from 'react'
import './LovePopup.css'

const LovePopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-hearts">
          <span className="floating-heart">💕</span>
          <span className="floating-heart">💖</span>
          <span className="floating-heart">💗</span>
        </div>
        
        <h2 className="popup-title">
          Yeah! I'm so lucky! 💕
        </h2>
        
        <div className="popup-message">
          <p className="popup-text">
            Just text me the date and I'll come to you! 💑
          </p>
          <p className="popup-text">
            Give me lots of kisses! 😘💋
          </p>
        </div>

        <div className="popup-emoji">
          <span className="big-emoji">💕</span>
          <span className="big-emoji">💖</span>
          <span className="big-emoji">💗</span>
        </div>

        <button className="popup-button" onClick={onClose}>
          Close 💕
        </button>
      </div>
    </div>
  )
}

export default LovePopup