import { Hamburger } from 'lucide-react'
import { useEffect, useState } from 'react'
import Hamberg from './Hamberg'
import Logo from '../assets/favicon.svg?react';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content">
        {/* <div className="logo">SW</div> */}
        <div className='logo-wrap'>

          <Logo className="logo-2" />

        </div>
        <Hamberg className="hamberg" />
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
          <li><a href="#education" onClick={(e) => handleNavClick(e, '#education')}>Education</a></li>
        </ul>
      </div>
    </nav>
  )
}
