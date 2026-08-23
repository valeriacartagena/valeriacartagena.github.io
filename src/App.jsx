import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Library from './pages/Library'
import './App.css'

// Section buttons scroll within the home page; page buttons navigate to a route.
const MENU = [
  { id: 'about', label: 'About', to: { pathname: '/', hash: '#home' } },
  { id: 'research', label: 'Research', to: { pathname: '/', hash: '#research' } },
  { id: 'tutorials', label: 'Tutorials', to: { pathname: '/', hash: '#tutorials' } },
  { id: 'library', label: 'Library', to: { pathname: '/library' } },
]

function isActive(item, location) {
  if (item.to.hash) {
    return location.pathname === '/' && location.hash === item.to.hash
  }
  return location.pathname === item.to.pathname
}

// Scroll to the hash target after client-side navigation (or to the top when there's no hash).
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  const location = useLocation()

  return (
    <>
      <nav className="floating-bar" aria-label="Sections">
        {MENU.map((item) => {
          const active = isActive(item, location)
          return (
            <Link
              key={item.id}
              to={item.to}
              className={`floating-bar-btn${active ? ' active' : ''}`}
              aria-current={active ? 'true' : undefined}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="container">
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>

        <footer className="footer">
          <p>Copyright © 2026 Valeria Cartagena. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
