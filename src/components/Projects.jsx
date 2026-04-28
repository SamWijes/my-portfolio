import { useEffect, useRef } from 'react'
import Modal from '../ui/Modal/Modal'
import ProjectCard from '../ui/ProjectCard/ProjectCard'
import { Hand, Building2, DollarSign, BrainCircuit, UserRoundSearch } from 'lucide-react'



const projectsData = [
  {
    title: 'BizPilot AI (ERP for SMEs)',
    description: 'AI-powered ERP platform that generates business insights, automates sales content, and optimizes inventory and financial management using OpenAI APIs.',
    tech: ['React', 'Node.js', 'Express', 'OpenAI API', 'MySQL', 'MaterialUI'],
    popoverDetail: 'BizPilot AI is an AI-powered ERP platform designed for SMEs to streamline operations and decision-making. The system enables end-to-end inventory and supply chain management through a single point of data entry, automatically calculating stock levels and tracking flow across the business. It also includes AI-driven social media management, allowing users to generate posts and business insights using the OpenAI API. The platform was built with a React frontend and an Express backend, using MySQL with Sequelize ORM for database management, and Material UI for a clean and responsive user interface.',
    icon: (<Building2 />
      // <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h6" />
      //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h6a2 2 0 012 2v6" />
      //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 3h8v8" />
      // </svg>
    ),
    images: [
      `./projects/bizpilot/(1).jpg`,
      `./projects/bizpilot/(2).jpg`,
      `./projects/bizpilot/(3).jpg`,
      `./projects/bizpilot/(4).jpg`,
      `./projects/bizpilot/(5).jpg`,
      `./projects/bizpilot/(6).jpg`
    ],
    git: 'https://github.com/SamWijes/bizpilotai-frontend',
    site: 'https://bizpilot.samithwijesekara.me'
  },
  {
    title: 'SkilzBridge Job Hunting Platform',
    description: 'A multi-role job platform connecting job seekers, employers, and educators, with features for job posting, applications, and skill development.',
    tech: ['React', 'PHP', 'MySQL', 'CSS Modules'],
    popoverDetail: 'In this project I focused specially on project structure from end to end focusing on scalable app design.SkilzBridge is a job hunting platform designed to connect job seekers, employers, and educators in one place. It allows employers to post jobs, candidates to apply, and educators to promote skill-based courses. The frontend was built with React, while the backend was developed using PHP . This project was a deep dive into PHP and backend fundamentals, focusing on clean structuring and real-world workflows. Some advanced features like AI-powered resume building and optimization are planned for future updates.',
    icon: (<UserRoundSearch />
      // <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h6" />
      //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h6a2 2 0 012 2v6" />
      //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 3h8v8" />
      // </svg>
    ),
    images: [
      `./projects/skillzbridge/(1).jpg`,
      `./projects/skillzbridge/(2).jpg`,
      `./projects/skillzbridge/(3).jpg`,
      `./projects/skillzbridge/(4).jpg`,
      `./projects/skillzbridge/(5).jpg`,
      `./projects/skillzbridge/(6).jpg`
    ],
    git: 'https://github.com/SamWijes/bizpilotai-frontend',
    site: 'https://skillzbridge.samithwijesekara.me'
  },
  {
    title: 'Yappzy.com',
    description: 'Classified ad listing platform with advanced database scraping, preprocessing, and automated population capabilities.',
    tech: ['cPanel', 'myPhpAdmin', 'SQL', 'Playwright', 'Python', 'SQL', 'SSH(WinSCP)'],
    popoverDetail: 'This project involved scraping data from Gumtree and populating a database with over 10,000 listings. Separate scripts were built to extract listing information, download and organize images into indexed folders, and finally use a Python script to connect to the database and automate bulk data insertion.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    images: [
      `./projects/yappzy/(1).jpg`,
      `./projects/yappzy/(2).jpg`,
      `./projects/yappzy/(3).jpg`,
      `./projects/yappzy/(4).jpg`,
      `./projects/yappzy/(5).jpg`,
      `./projects/yappzy/(6).jpg`
    ],
    git: '',
    site: ''
  },
  {
    title: 'Driver Drowsiness Detection',
    description: 'ML-based alert system to monitor driver sleepiness and prevent accidents using computer vision and neural networks.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    popoverDetail: 'This was my final year project for Software Engineering BSc,I was inclined to choose a project with ML due to my prior experience with "Gesture Recognition Glove Project" .This project focused on real-time driver drowsiness detection using computer vision and deep learning. A 7-layer CNN model was trained on over 16,000 images from the MRL Eye Dataset, achieving an accuracy above 90%. OpenCV was used for live face and eye detection, and the system continuously monitored eye states to identify signs of fatigue. When drowsiness was detected, an alert was triggered to help prevent potential accidents.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="m12,2C6.49,2,2,6.49,2,12s4.49,10,10,10,10-4.49,10-10S17.51,2,12,2Zm0,2c3.71,0,6.82,2.54,7.73,5.97l-4.01-.5c-2.47-.31-4.97-.31-7.44,0l-4.01.5c.9-3.43,4.02-5.97,7.73-5.97Zm1.5,8c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5.67-1.5,1.5-1.5,1.5.67,1.5,1.5Zm-9.5,0l1.67.28c2.58.43,4.58,2.48,4.95,5.07l.37,2.58c-3.93-.5-6.99-3.86-6.99-7.93Zm9.01,7.93l.37-2.58c.37-2.59,2.37-4.64,4.95-5.07l1.67-.28c0,4.07-3.05,7.43-6.99,7.93Z" />
      </svg>
    ),
     images: [
      `./projects/drowsyness/(1).jpg`,
      `./projects/drowsyness/(2).jpg`,
      `./projects/drowsyness/(3).jpg`,
      `./projects/drowsyness/(4).jpg`,
      `./projects/drowsyness/(5).jpg`,
    
    ],
    site: 'https://www.youtube.com/watch?v=7ZJCvTy1tRc',
    git: 'https://github.com/SamWijes/driver-drowsiness-detection-system'
  },
  {
    title: 'Gesture Recognition Glove',
    description: 'IoT project converting sign language gestures to voice using artificial neural networks for speech-impaired communication.',
    tech: ['Arduino', 'C++', 'ANN', 'IoT'],
    popoverDetail: 'This was my first hands on ML project and a key milestone that sparked my interest in programming. The system used a gesture recognition glove to convert sign language into speech using a lightweight 3-layer artificial neural network. Due to Arduino’s limited computational capacity, all neural network calculations including node activations, bias adjustments, error propagation, and sigmoid functions were implemented manually from scratch without using external libraries. Despite these constraints, the project successfully demonstrated real time gesture to voice conversion, making it both a challenging and rewarding experience.',
    icon: (<Hand />
      // <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      // </svg>
    ),
    git: 'https://github.com/SamWijes/iot-gesture-recognition-glove-for-speech-impaired',
    site: 'https://www.youtube.com/watch?v=9elC-MJlcUo',
    images: [
      `./projects/gestureglove/(1).jpg`,
      `./projects/gestureglove/(2).jpg`,
      `./projects/gestureglove/(3).jpg`,
     
    ],

  },
  {
    title: 'Expense Tracker',
    description: 'A full-stack expense tracking app built to experiment & play aroud with 😄  ShadCN/UI',
    tech: [
      'React',
      'ShadCN/UI',
      'Tailwind CSS',
      'Express.js',
      'JWT Authentication',
      'CI/CD (GitHub Actions)',
      'AWS EC2'
    ],
    popoverDetail: 'A fun full-stack project I built to play around 😄 with ShadCN/UI and modern tooling. It lets users track expenses with JWT-based auth, backed by an Express API and a React frontend styled with Tailwind. I also set up a CI/CD pipeline with GitHub Actions and deployed it on AWS EC2 real workflows and deployment.',
    icon: (<DollarSign />
      // <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      // </svg>
    ),
    git: 'https://github.com/SamWijes/expense-tracker-frontend-shadcn',
    site: 'https://expensetracker.samithwijesekara.me',
    images: [
      `./projects/expense/(1).jpg`,
      `./projects/expense/(2).jpg`,
      `./projects/expense/(3).jpg`,
      
     
    ],
  },
  {
    title: 'Web Scraping Tools with OpenAI',
    description: 'Custom scraping tools with AI integration for data processing, cleaning, and automated browsing capabilities.',
    tech: ['Python', 'Selenium', 'Playwright', 'OpenAI API','Git Actions'],
    popoverDetail: 'A collection of custom web scraping tools built to experiment with automation and AI-assisted data processing. Using Selenium and Playwright, the tools handle dynamic browsing, data extraction, and interaction with complex websites. OpenAI APIs were integrated to clean, structure, and enhance scraped data making it more usable for downstream tasks. This project was a deep dive into combining traditional scraping with AI to build smarter, more adaptive workflows.',
    icon: (
      // <BrainCircuit/>
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    images: [
      
      
     
    ],
  },
  {
    title: 'YouTube Bulk Transcript Scraper',
    description: 'Comprehensive tool with GUI for scraping transcripts from entire YouTube channels efficiently.',
    tech: ['Python', 'Tkinter', 'Playwright', 'YouTube API'],
    popoverDetail: 'A handy tool I built to scrape transcripts from entire YouTube channels in bulk, with a simple GUI for ease of use. It uses Playwright and the YouTube API to navigate videos, extract captions, and process large amounts of content efficiently. The project was a great way to explore automation at scale, handle edge cases in scraping, and build a user friendly interface with Tkinter for non technical use.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    images: [
      `./projects/yt-transcribe/(1).jpg`,
      `./projects/yt-transcribe/(2).jpg`,
      `./projects/yt-transcribe/(3).jpg`,
      
     
    ],
    git: ''
  },


]

export default function Projects() {
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
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-number">03</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Innovative solutions that showcase technical versatility</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} ref={cardsRef} project={project} index={index} />

          ))}
        </div>
      </div>
    </section>
  )
}
