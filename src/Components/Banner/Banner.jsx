import React from 'react'

const Banner = props => {
  const { icon } = props
  return (
    <>
      <div className="banner">
        <div className="banner__logo to-right show_on_scroll">
          <h2 className="banner__title">
            Software Developer
          </h2>
          <img src={icon} alt="" className="banner__icon" />
        </div>
        <div className="banner__right to-left show_on_scroll">
          <i className='bx bxl-github'></i>
          <i className='bx bxl-linkedin-square'></i>
          <i className='bx bxl-instagram'></i>
          <i className='bx bxl-facebook-circle'></i>
          <i className='bx bx-mail-send'></i>
        </div>
      </div>
    </>
  )
}

export default Banner