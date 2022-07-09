import React from 'react'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__info to-right show_on_scroll">
          Hello
        </div>
        <p className="about__desc to-top show_on_scroll">
          I'm Ngoc Son, a final year Computer Science student, whose goals are to become a full-stack developer, build practical web and mobile applications.
        </p>
        <div className="about__icon to-left show_on_scroll">
          <div>
            <i className='bx bxl-html5 about__html' ></i>
            <i className='bx bxl-react about__react'></i>
          </div>
          <div>
            <i className='bx bxl-css3 about__css' ></i>
            <i className='bx bxl-sass about__sass' ></i>
            <i className='bx bxl-redux about__redux' ></i>
          </div>
          <i className='bx bxl-javascript about__javascript' ></i>
        </div>
      </div>
    </>
  )
}

export default About