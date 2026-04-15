import { useEffect, useRef } from 'react'

const skillsData = [
  {
    title: 'Languages',
    tags: ['Python', 'JavaScript', 'Java', 'SQL', 'C++'],
  },
  {
    title: 'Frameworks & Libraries',
    tags: ['React', 'Express', 'Spring', 'TensorFlow', 'Pandas', 'NumPy'],
  },
  {
    title: 'Databases',
    tags: ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Specializations',
    tags: ['Web Scraping', 'Selenium', 'Playwright', 'Machine Learning', 'Automation', 'OpenAI API'],
  },
]

export default function Skills() {
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
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-number">01</div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">A comprehensive toolkit for building robust, scalable solutions</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              className="skill-category"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
