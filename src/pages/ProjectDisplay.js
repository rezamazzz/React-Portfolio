import React from 'react'
import {useParams} from 'react-router-dom'
import Projectlist from '../helpers/Projectlist';
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/projectDisplay.css'

const ProjectDisplay = () => {
    const {id}=useParams();
    const project=Projectlist[id];
  return (
    <div className='project'>
    <h1>{project.name}</h1>
    <img src={project.image}/>
    <p><b>Skills:</b>{project.skills}</p>
    <GithubIcon/>
    </div>
  )
}

export default ProjectDisplay