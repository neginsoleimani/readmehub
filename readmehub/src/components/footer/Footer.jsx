import React from 'react'
import './footer.css'


export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__title-box'>
        <h4>readmehub</h4>
        <h5>© Copyright 2023 ProfileMe.dev. All rights reserved.</h5>
      </div>
      <div className='footer__link-box'>
        <div className='footer__link-icons'>
          <i className='bi bi-github'></i>
          <i className='bi bi-instagram'></i>
        </div>
        <div className='footer__links'>
          <ul>
            <li>Home Page</li>
            <li>Create Profile</li>
            <li>Changelog</li>
            <li>Leave Feedback</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
