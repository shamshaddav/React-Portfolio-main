
import React from 'react'
import { social } from './Data/Dummydata'

const Footer = () => {
  return (
    <>
    <footer  data-aos="fade-down"
    data-aos-duration="1000"
    >
    {social.map((item, index) => (
      <a className="footer-link"  href={`${item.url}`} target="_blank" rel="noopener noreferrer" key={index}>
      <i>{item.icon}</i>
    </a>
    ))}
    <p>All Right Reserved 2024</p>
    </footer>
    </>
  )
}

export default Footer