
const Footer = props => {

  return (
    <div className="footer">
      <div>
        <h2 className='header__logo'>SonDev</h2>
        <p className="footer__desc">Currently active looking for Summer 2022 Frontend Developer internship</p>
      </div>
      <div>
        <h2 className="footer__title">Contact Me</h2>
        <div className="footer__contact">
          <i className='bx bxl-github'></i>
          <i className='bx bxl-linkedin-square'></i>
          <i className='bx bxl-instagram'></i>
          <i className='bx bxl-facebook-circle'></i>
          <i className='bx bx-mail-send'></i>
        </div>
      </div>
    </div>
  )
}

export default Footer