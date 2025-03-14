import React from 'react'
import "./Grid.style.css"
const Grid = () => {
  return (
    <div className="project-grid">
    <div className="project-item">
    <img src="../../assets/images/heroPhoto.jpg" alt="Project Title" className="project-image"/>
    <div classNane="project-info">
      <h3>Project Title</h3>
      <p>Short description of the project.</p>
    </div>
    </div>
    </div>
  )
}

export default Grid