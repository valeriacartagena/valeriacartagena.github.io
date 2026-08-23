import { Link, useParams } from 'react-router-dom'
import { getTutorial } from '../data/tutorials'

function TutorialPage() {
  const { slug } = useParams()
  const tutorial = getTutorial(slug)

  if (!tutorial) {
    return (
      <section className="page">
        <h2 className="page-title">Tutorial not found</h2>
        <p className="page-intro">
          <Link to="/#tutorials">← Back to tutorials</Link>
        </p>
      </section>
    )
  }

  return (
    <article className="page tutorial-page">
      <Link to="/#tutorials" className="back-link">← All tutorials</Link>
      <img className="tutorial-hero" src={tutorial.cover} alt="" />
      <h2 className="page-title">{tutorial.title}</h2>
      <p className="page-intro">{tutorial.description}</p>
      <div className="tutorial-content">{tutorial.content}</div>
    </article>
  )
}

export default TutorialPage
