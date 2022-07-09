import React from 'react'
import Project from './Project'
import { dataProject } from '../../assets/api-fake/dataFake';

const ShowProject = () => {

  // let name_icon = []
  // dataProject.map(e => name_icon = e.icon)
  // name_icon.map(e => console.log(e.name_icon))

  return (
    <div className="show__project">
      <h2 className='show__project__title'>Project</h2>
      {
        dataProject.map(project => (
          <Project
            key={project.id}
            src={project.img}
            url={project.url}
            desc={project.desc}
            icon={project.icon}
            target="_blank"
            name={project.name}
          />
        ))
      }
    </div>
  )
}

export default ShowProject