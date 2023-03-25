import React from 'react'
import './footer.css'


export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__title-box'>
      <div className='footer__links'>
          <ul>
            <li>© 2023 READMEhub, Inc.</li>
            <li>Create Profile</li>
            <li>What is README?</li>
          </ul>
        </div>
      </div>
      <div className='footer__link-box'>
        <div className='footer__link-icons'>
          <a href="#"><i className="bi bi-linkedin"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="https://instagram.com/"><i className='bi bi-instagram'></i></a>
          <a href="https://github.com/"><i className='bi bi-github'></i></a>
        </div>
      </div>
    </div>
  )
}
