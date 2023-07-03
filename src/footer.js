import React from 'react'
import './home.modules.css'

function Footer() {
  return (
    <div className="footer">
      <ul className="footerContent"> 
        <li >
          <a href="/" className="footerLink">Home</a>
        </li>
        <li>
          <a href="/hirenow" className="footerLink">Hire Now</a>
        </li>
        <li>
          <a href="/" className="footerLink">About Us</a>
        </li><li>
          <a href="/" className="footerLink">Contact Us</a>
      </li>
      </ul>
      <h6 className='text-center'>Designed and Developed By Pooja Gandhakwala</h6>
    </div>
  )
}

export default  Footer