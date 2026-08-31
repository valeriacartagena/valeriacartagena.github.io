import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Library from './pages/Library'
import TutorialPage from './pages/TutorialPage'
import NotFound from './pages/NotFound'
import './App.css'

// Section buttons scroll within the home page; page buttons navigate to a route.
const MENU = [
  { id: 'about', label: 'About', to: { pathname: '/', hash: '#home' } },
  { id: 'research', label: 'Research', to: { pathname: '/', hash: '#research' } },
  { id: 'tutorials', label: 'Tutorials', to: { pathname: '/', hash: '#tutorials' } },
  { id: 'library', label: 'Library', to: { pathname: '/library' } },
]

// Home-page sections that have a menu button, in page order.
const SECTION_IDS = MENU.filter((item) => item.to.hash).map((item) => item.to.hash.slice(1))

// Scroll spy: which section is currently "reached" — i.e. its top has passed
// the spot a menu click would scroll it to (just below the floating bar).
function useCurrentSection(enabled) {
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    if (!enabled) return undefined
    let frame = 0

    const update = () => {
      frame = 0
      const root = document.documentElement
      const barHeight = parseFloat(getComputedStyle(root).getPropertyValue('--top-bar-height')) || 60
      const threshold = barHeight + 24 + 2 // matches the sections' scroll-margin-top, plus a little slack

      let reached = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) reached = id
      }

      // A short last section may never reach the threshold, so treat hitting
      // the bottom of the page as reaching it.
      const scrollable = root.scrollHeight > window.innerHeight + 2
      const atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 2
      if (scrollable && atBottom) reached = SECTION_IDS[SECTION_IDS.length - 1]

      setCurrent(reached)

      // Keep the address bar in step (#home, #research, …) without adding
      // history entries or triggering a scroll. replaceState bypasses the
      // router on purpose; its state object is preserved so the router's
      // bookkeeping stays intact.
      const hash = `#${reached}`
      if (window.location.hash !== hash) {
        window.history.replaceState(window.history.state, '', hash)
      }
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    schedule() // measure once on mount, on the next frame
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [enabled])

  return enabled ? current : null
}

function isActive(item, location, currentSection) {
  if (item.to.hash) {
    return location.pathname === '/' && currentSection === item.to.hash.slice(1)
  }
  return location.pathname === item.to.pathname
}

// Scroll to the hash target after client-side navigation (or to the top when
// there's no hash). Keyed on `key` so re-clicking the current menu button
// still scrolls, even after the scroll spy has rewritten the address bar.
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])
  return null
}

function App() {
  const location = useLocation()
  const currentSection = useCurrentSection(location.pathname === '/')

  return (
    <>
      <nav className="floating-bar" aria-label="Sections">
        {MENU.map((item) => {
          const active = isActive(item, location, currentSection)
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
          <Route path="/tutorials/:slug" element={<TutorialPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="footer">
          <p>Copyright © 2026 Valeria Cartagena. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
