import React from 'react'
import Projectitem from '../components/Projectitem'
import Projectlist from '../helpers/Projectlist'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import '../styles/projects.css'

export const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {Projectlist.map((project,idx)=>{
          return <Projectitem id={idx} name={project.name} image={project.image}/>
        })}
      </div>

    </div>
  )
}
export default Projects