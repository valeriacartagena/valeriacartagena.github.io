import { getShelves } from '../data/books'

const PER_SHELF = 4
const shelves = getShelves()

function chunk(items, size) {
  const rows = []
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size))
  return rows
}

function Book({ book }) {
  const label = book.author ? `${book.title} — ${book.author}` : book.title
  return (
    <figure className="book" title={label}>
      <span className="book-cover">
        <img src={book.cover} alt={label} loading="lazy" />
      </span>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  )
}

/* A 3D bookcase. The wooden frame (back panel, side walls, top board, one
   plank per row) and the books are rendered in two separate 3D layers that
   share the same perspective, so they line up visually but a hovered, rotated
   book can never intersect the frame's surfaces. */
function Bookcase({ books }) {
  const rows = chunk(books, PER_SHELF)
  return (
    <div className="bookcase">
      <div className="case-frame" aria-hidden="true">
        <div className="case-back" />
        <div className="case-wall case-wall-left" />
        <div className="case-wall case-wall-right" />
        <div className="plank case-top">
          <span className="plank-top" />
        </div>
        {rows.map((_, i) => (
          <div key={i} className="frame-row">
            <div className="plank">
              <span className="plank-top" />
            </div>
          </div>
        ))}
      </div>

      <div className="case-books">
        {rows.map((row, i) => (
          <div key={i} className="shelf-row">
            <div className="shelf-books">
              {row.map((book) => (
                <Book key={book.file} book={book} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Library() {
  return (
    <section className="page">
      <h2 className="page-title">My Library</h2>
      <p className="page-intro">I LOVE reading. Here is a hand-picked collection of books that I have read and recommend.</p>

      {shelves.map((shelf) => (
        <div key={shelf.key} className="shelf-group">
          <h3 className="shelf-year">{shelf.label}</h3>
          <Bookcase books={shelf.books} />
        </div>
      ))}
    </section>
  )
}

export default Library
