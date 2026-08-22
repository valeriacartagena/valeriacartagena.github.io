import { getShelves } from '../data/books'

const shelves = getShelves()

function Library() {
  return (
    <section className="library">
      <h2 className="page-title">My Library</h2>
      <p className="page-intro">I LOVE reading. Here is a hand-picked collection of books I read and recommend.</p>

      {shelves.map((shelf) => (
        <div key={shelf.key} className="shelf-group">
          <h3 className="shelf-year">{shelf.label}</h3>
          <div className="shelf-top" aria-hidden="true" />
          <div className="bookshelf">
            {shelf.books.map((book) => {
              const label = book.author ? `${book.title} — ${book.author}` : book.title
              return (
                <figure key={book.file} className="book" title={label}>
                  <span className="book-cover">
                    <img src={book.cover} alt={label} loading="lazy" />
                  </span>
                  <figcaption className="sr-only">{label}</figcaption>
                </figure>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Library
