import { useState } from 'react'
import './App.css'

function App() {
  const links = [
    { title: 'Linkedin', url: 'https://www.linkedin.com/in/valeriacartagena/' },
    { title: 'Github', url: 'https://github.com/valeriacartagena' },
    { title: 'Research', url: 'https://scholar.google.com/citations?user=Ux4P00UAAAAJ&hl=en' },
    { title: 'Projects', url: 'https://devpost.com/software/terralink-h5vuel' },
    { title: 'Text Me', url: 'https://api.whatsapp.com/send/?phone=16504418128&text&type=phone_number&app_absent=0' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <header className="profile-section">
        <img src="/profile.png" alt="Valeria Cartagena" className="profile-img" />
        <h1 className="name">Valeria Cartagena</h1>
        <p className="bio">Stanford Undergrad | ChemE + CS | Agentic AI, Energy, Sustainability</p>
        <p className="email">Say hi to <a href="mailto:valecv@stanford.edu">valecv@stanford.edu!</a></p>
      </header>

      <main className="links-section">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="link-btn" target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        ))}
      </main>

      <footer className="footer">
        <p>Copyright © 2026 Valeria Cartagena. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
