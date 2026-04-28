import { useEffect, useRef } from 'react'

const experienceData = [
  {
    period: '2025 - Present',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    highlights: [
      'Full stack web development and custom web-scraping tools',
      'Python, Selenium, and Playwright for data extraction and automation',
      'OpenAI integration for intelligent content generation',
      'Client-specific automation solutions across various industries',
    ],
  },
  {
    period: '2019 - 2024',
    role: 'Project Engineer',
    company: 'ZTE Lanka',
    highlights: [
      'Increased efficiency by 25-50% through automation and process optimization',
      'Developed VB Macros and Python scripts for database task automation',
      'Implemented resource prediction and project course correction systems',
      'Streamlined cross-functional team coordination and project monitoring',
      'Managed PO documentation, SOW, SOP, and CRM systems',
    ],
  },
]

export default function Experience() {
  const itemsRef = useRef([])

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

    itemsRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(()=>{
     
  });

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-number">02</div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">Building innovative solutions across diverse domains</p>
        </div>
        
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div
              key={item.role}
              className="timeline-item"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-company">{item.company}</div>
                <ul className="timeline-highlights">
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
