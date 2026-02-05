import React from 'react'
import './LovePopup.css'

interface LovePopupProps {
  onClose: () => void
}

const LovePopup: React.FC<LovePopupProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-hearts">
          <span className="floating-heart">💕</span>
          <span className="floating-heart">💖</span>
          <span className="floating-heart">💗</span>
        </div>
        
        <h2 className="popup-title">
          Yeah! I'm so lucky Chudail Baby! 💕
        </h2>
        
        <div className="popup-message">
          <p className="popup-text">
            Just text me the Time, I'll come to you! 💑
          </p>
          <p className="popup-text">
            To give you lots of kisses Idiot ! 😘💋
          </p>
        </div>

        <div className="popup-emoji">
          <span className="big-emoji">💕</span>
          <span className="big-emoji">💖</span>
          <span className="big-emoji">💗</span>
        </div>

        <button className="popup-button" onClick={onClose}>
          Love you so much Chudail 💕
        </button>
      </div>
    </div>
  )
}

export default LovePopup