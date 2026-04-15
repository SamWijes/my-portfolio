export default function Footer() {
  const date=new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="mailto:Samithmw1000@gmail.com">Email</a>
          <a href="https://linkedin.com/in/samith-wijesekara-39b93a15b" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/SamWijes" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="copyright">
          © {date} Samith Wijesekara. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
