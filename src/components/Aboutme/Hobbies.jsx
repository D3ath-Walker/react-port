import React from 'react'

const Hobbies = () => {
  return (
    <div className="content">
        <div className="glass-box">
            <div className="box-header">
                <i className="fas fa-gamepad"></i>
                <h3>Hobbies & Interests</h3>
            </div>
            <div className="hobbies-grid">
                <div className="hobby-card">
                    <span className="hobby-icon">⚔️</span>
                    <h4>Valorant</h4>
                    <p>Tactical shooter grind</p>
                </div>
                <div className="hobby-card">
                    <span className="hobby-icon">🏆</span>
                    <h4>League of Legends</h4>
                    <p>MOBA strategy battles</p>
                </div>
                <div className="hobby-card">
                    <span className="hobby-icon">♟️</span>
                    <h4>Chess</h4>
                    <p>Mind games & strategy</p>
                </div>
                <div className="hobby-card">
                    <span className="hobby-icon">🃏</span>
                    <h4>Uno</h4>
                    <p>Chaos with friends</p>
                </div>
                <div className="hobby-card">
                    <span className="hobby-icon">🎌</span>
                    <h4>Anime</h4>
                    <p>Stories that hit different</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hobbies
