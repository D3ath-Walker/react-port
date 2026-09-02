import React from 'react'

const Skills = () => {
  return (
    <div className="content">
        <div className="glass-box">
            <div className="box-header">
                <i className="fas fa-code"></i>
                <h3>Skills</h3>
            </div>
            <div className="skills-grid">
                <div className="skill-category">
                    <h4>💻 Programming Languages</h4>
                    <div className="skill-tags">
                        <span className="tag">C</span>
                        <span className="tag">C++</span>
                        <span className="tag">Java</span>
                        <span className="tag">Python</span>
                        <span className="tag">JavaScript</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h4>🌐 Web Development</h4>
                    <div className="skill-tags">
                        <span className="tag">HTML</span>
                        <span className="tag">CSS</span>
                        <span className="tag">JavaScript</span>
                        <span className ="tag">Node.js</span>
                        <span className="tag">MongoDB</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h4>🗣️ Soft Skills</h4>
                    <div className="skill-tags">
                        <span className="tag">English Fluency</span>
                        <span className="tag">Communication</span>
                        <span className="tag">Problem Solving</span>
                        <span className="tag">Goal-Oriented</span>
                    </div>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Skills

