import React from 'react'

const Project = (props) => {

  const { src, url, icon, desc, target, name } = props
  // console.log(icon)
  // console.log(typeof (icon))

  return (
    <section className="project">
      <div className="project__img to-right show_on_scroll">
        <img src={src} alt="" />
      </div>
      <div className="project__info">
        <h2 className="project__title to-left show_on_scroll">
          {name}
        </h2>
        <p className="project__desc to-left show_on_scroll">
          {desc}
        </p>
        <a target={target} href={url} className="project__view to-left show_on_scroll" >
          View website
        </a>
        <div className="project__icon to-top show_on_scroll">
          {
            icon === undefined ? [] :
              icon.map((icon, index) => (
                <i key={index} className={icon.name_icon}></i>
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Project