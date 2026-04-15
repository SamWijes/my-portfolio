import { useEffect, useRef } from 'react'

const DegreeIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
  </svg>
)

const CertIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const educationData = [
  {
    icon: <DegreeIcon />,
    title: 'BSc Software Engineering',
    institutions: ['Kingston University'],
    badge: 'First Class Honours',
  },
  {
    icon: <DegreeIcon />,
    title: 'Graduate Diploma',
    institutions: ['Electronics & Telecommunication Engineering', 'IESL College of Engineering'],
    badge: '4 Years',
  },
  {
    icon: <CertIcon />,
    title: 'Certifications',
    institutions: ['Java Master Class by Tim Buchalka', 'Full Stack Web Development Bootcamp by Angela Yu'],
    badge: null,
  },
]

export default function Education() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    cardsRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-number">04</div>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="section-subtitle">Building a strong foundation in software and engineering principles</p>
        </div>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <div
              key={item.title}
              className="education-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="education-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              {item.institutions.map((inst, i) => (
                <div key={i} className="institution" style={i < item.institutions.length - 1 ? { marginBottom: '0.5rem' } : {}}>
                  {inst}
                </div>
              ))}
              {item.badge && <span className="grade">{item.badge}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
