import { useEffect, useRef } from 'react'
import FloatingNav from '../ui/FloatingNav'
export default function Hero() {
  const heroContentRef = useRef(null)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${scrolled * 0.2}px)`
        heroContentRef.current.style.opacity = 1 - scrolled / 500
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // useEffect(() =>{
  //   const observer=new IntersectionObserver(()=>{},{})
  //   observer.observe(c)
  //   return(()=>observer.disconnect())
  // },[])
  return (
    <section id="home" className="hero">
     
      <div className="hero-content" ref={heroContentRef}>
        <div className="hero-badge">Available for Work</div>
        <h1>
          <span className="gradient-text">Samith</span>
          <br />
          Wijesekara
        </h1>
        <h2>Software Engineer &amp; Full Stack Developer</h2>
        <p>Specializing in automation, web scraping, and intelligent systems. Turning complex data challenges into elegant solutions.</p>
       
        <div className="contact-info">
          <div className="contact-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Samithmw1000@gmail.com</span>
          </div>
          
        </div>
        
        <div className="social-links">
          <a href="https://linkedin.com/in/samith-wijesekara-39b93a15b" target="_blank" rel="noreferrer" className="social-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </a>
          <a href="https://github.com/SamWijes" target="_blank" rel="noreferrer" className="social-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
        
        <div className="scroll-indicator">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      <FloatingNav  elementRef={heroContentRef}/>
    </section>
  )
}
