import React from 'react'

const Certifications = () => {
  return (
    <div className="content">
        <div className="glass-box">
            <div className="box-header">
                <i className="fas fa-certificate"></i>
                <h3>Certifications</h3>
            </div>
            <div className="cert-grid">
                <div className="cert-item">
                    <i className="fas fa-award"></i>
                    <div>
                        <h4>Advance Diploma in Computer Application</h4>
                        <p>Comprehensive course covering core computer applications and software</p>
                    </div>
                </div>
                <div className="cert-item">
                    <i className="fas fa-robot"></i>
                    <div>
                        <h4>AI Certifications</h4>
                        <p>Multiple certifications in Artificial Intelligence and its applications</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Certifications
