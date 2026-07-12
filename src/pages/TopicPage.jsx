import { Link, useParams } from 'react-router-dom'
import { getTopic } from '../data/topics'
import NotFound from './NotFound'

function TopicPage() {
  const { topicSlug } = useParams()
  const topic = getTopic(topicSlug)

  if (!topic) return <NotFound />

  // preserve entry order while grouping consecutive sections
  const groups = []
  for (const entry of topic.entries) {
    const section = entry.section ?? null
    const last = groups[groups.length - 1]
    if (last && last.section === section) {
      last.entries.push(entry)
    } else {
      groups.push({ section, entries: [entry] })
    }
  }

  return (
    <section className="news-section">
      <h2 className="news-title">{topic.title}</h2>
      {groups.map((group, i) => (
        <div key={i} className="entry-group">
          {group.section && <h3 className="entry-section">{group.section}</h3>}
          <ul className="entry-list">
            {group.entries.map((entry) => (
              <li key={entry.slug}>
                <Link to={`/${topic.slug}/${entry.slug}`} className="entry-link">
                  <span>{entry.title}</span>
                  <span className="entry-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default TopicPage
