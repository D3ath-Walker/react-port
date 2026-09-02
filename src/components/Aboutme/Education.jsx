import React from 'react'

const Education = () => {
  return (
    <div className="content">
        <div className="glass-box">
            <div className="box-header">
                <i className="fas fa-graduation-cap"></i>
                <h3>Education</h3>
            </div>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h4>BCA – 2nd Year / 4th Semester</h4>
                        <p className="inst">Impact College, Patna</p>
                        <p className="sub">Affiliated to: Aryabhatta Knowledge University, Patna</p>
                        <span className="year">2023 – 2026</span>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h4>12th Standard</h4>
                        <p className="inst">Patna, Bihar</p>
                        <span className="year">Completed</span>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h4>10th Standard</h4>
                        <p className="inst">Patna, Bihar</p>
                        <span className="year">Completed</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Education
