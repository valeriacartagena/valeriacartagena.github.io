import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { topics } from './data/topics'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import ArticlePage from './pages/ArticlePage'
import NotFound from './pages/NotFound'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function MenuIcon({ open }) {
  return open ? (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const closeNav = () => setNavOpen(false)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setNavOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <div className="bg-blobs" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <button
        type="button"
        className="menu-btn"
        aria-label={navOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={navOpen}
        onClick={() => setNavOpen((open) => !open)}
      >
        <MenuIcon open={navOpen} />
      </button>

      <div
        className={`nav-backdrop${navOpen ? ' open' : ''}`}
        onClick={closeNav}
        aria-hidden="true"
      />

      <aside className={`side-nav${navOpen ? ' open' : ''}`}>
        <NavLink to="/" end onClick={closeNav} className={({ isActive }) => `side-topic${isActive ? ' active' : ''}`}>
          Home
        </NavLink>
        {topics.map((topic) => (
          <div key={topic.slug} className="side-group">
            <NavLink
              to={`/${topic.slug}`}
              end
              onClick={closeNav}
              className={({ isActive }) => `side-topic${isActive ? ' active' : ''}`}
            >
              {topic.name}
            </NavLink>
            <ul className="side-entries">
              {topic.entries.map((entry) => (
                <li key={entry.slug}>
                  <NavLink
                    to={`/${topic.slug}/${entry.slug}`}
                    onClick={closeNav}
                    className={({ isActive }) => `side-entry${isActive ? ' active' : ''}`}
                  >
                    {entry.short ?? entry.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      <div className="container">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:topicSlug" element={<TopicPage />} />
          <Route path="/:topicSlug/:entrySlug" element={<ArticlePage />} />
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
