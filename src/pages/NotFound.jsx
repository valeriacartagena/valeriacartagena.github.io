import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="news-section">
      <h2 className="news-title">Page not found</h2>
      <p className="article-empty">This page doesn&apos;t exist. <Link to="/">Go back home</Link></p>
    </section>
  )
}

export default NotFound
