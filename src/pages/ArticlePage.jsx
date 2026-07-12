import { Link, useParams } from 'react-router-dom'
import { getTopic, getEntry } from '../data/topics'
import NotFound from './NotFound'

function ArticlePage() {
  const { topicSlug, entrySlug } = useParams()
  const topic = getTopic(topicSlug)
  const entry = getEntry(topicSlug, entrySlug)

  if (!topic || !entry) return <NotFound />

  return (
    <section className="news-section">
      <p className="breadcrumb">
        <Link to={`/${topic.slug}`}>← {topic.title}</Link>
      </p>
      <h2 className="news-title">{entry.title}</h2>
      {entry.content
        ? <div className="article-body">{entry.content}</div>
        : <p className="article-empty">Coming soon ✍️</p>}
    </section>
  )
}

export default ArticlePage
