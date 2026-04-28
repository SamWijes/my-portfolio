import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'
import Modal from './ui/Modal/Modal'
import Carousel from './ui/Carousel/Carousel'
import ProjectCard from './ui/ProjectCard/ProjectCard'
import { useRef } from 'react'
const project0=[ {
    title: 'Yappzy.com',
    description: 'Classified ad listing platform with advanced database scraping, preprocessing, and automated population capabilities.',
    tech: ['cPanel', 'myPhpAdmin', 'SQL', 'Playwright','Python','SQL','SSH(WinSCP)'],
    popoverDetail: 'This project involved scraping data from Gumtree and populating a database with over 10,000 listings. Separate scripts were built to extract listing information, download and organize images into indexed folders, and finally use a Python script to connect to the database and automate bulk data insertion.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    images:[
        '/src/assets/projects/yappzy/(1).jpg',
        '/src/assets/projects/yappzy/(2).jpg',
        '/src/assets/projects/yappzy/(3).jpg',
        '/src/assets/projects/yappzy/(4).jpg',
        '/src/assets/projects/yappzy/(5).jpg',
        '/src/assets/projects/yappzy/(6).jpg'
      ],
      git:'1',
      site:''
  }]
export default function App() {
  // const cardRef=useRef([])

  return (
    <>
      {/* <ProjectCard  ref={cardRef}  key={'test'}  project={project0[0]} index={0} /> */}
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <ContactMe/>
      <Footer />
      
    </>
  )
}
