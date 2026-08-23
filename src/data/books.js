// Every cover under src/books/<year>/ is picked up automatically.
// Add title/author metadata below (keyed by filename without extension) to control
// display order and labels; any cover not listed still shows, with a title derived
// from its filename. Mark a book `reading: true` to move it to the
// "Currently reading" shelf at the top (remove the flag once finished).
const covers = import.meta.glob('../books/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const catalog = {
  2026: [
    { file: 'shoe-dog', title: 'Shoe Dog', author: 'Phil Knight' },
    { file: 'zero-to-one', title: 'Zero to One', author: 'Peter Thiel' },
    { file: 'grit-9781501111129_hr', title: 'Grit', author: 'Angela Duckworth' },
    { file: 'deep-work', title: 'Deep Work', author: 'Cal Newport' },
    { file: 'the-worlds-i-see', title: 'The Worlds I See', author: 'Fei-Fei Li' },
    { file: 'designing-your-life', title: 'Designing Your Life', author: 'Bill Burnett & Dave Evans' },
    { file: 'unreasonable-hospitality', title: 'Unreasonable Hospitality', author: 'Will Guidara' },
    { file: 'inner-excellence', title: 'Inner Excellence', author: 'Jim Murphy' },
    { file: 'inside-the-box', title: 'Inside the Box', author: 'David Epstein' },
    { file: 'when-heavens-went-on-sale', title: 'When the Heavens Went on Sale', author: 'Ashlee Vance' },
    { file: 'thinking-machine', title: 'The Thinking Machine', author: 'Stephen Witt', reading: true },
    { file: 'infinity-machine', title: 'The Infinity Machine', author: 'Sebastian Mallaby', reading: true },
    { file: 'brief-history-of-intelligence', title: 'A Brief History of Intelligence', author: 'Max Bennett', reading: true },
  ],
  'Previous Years': [
    { file: 'quantum-supremacy', title: 'Quantum Supremacy', author: 'Michio Kaku', reading: true },
    // listed books come first, in this order; the rest follow alphabetically
    { file: 'bible', title: 'Holy Bible', author: '' },
    { file: 'atomic-habits', title: 'Atomic Habits', author: 'James Clear' },
    { file: 'astrophysics-for-people-in-a-hurry', title: 'Astrophysics for People in a Hurry', author: 'Neil deGrasse Tyson' },
    { file: 'code', title: 'Code: The Hidden Language of Computer Hardware and Software', author: 'Charles Petzold' },
  ],
}

function titleFromFile(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function getShelves() {
  // { year: { file: url } }
  const byYear = {}
  for (const [path, url] of Object.entries(covers)) {
    const match = path.match(/\/books\/([^/]+)\/([^/]+)\.(jpe?g|png|webp)$/i)
    if (!match) continue
    const [, year, file] = match
    if (!byYear[year]) byYear[year] = {}
    byYear[year][file] = url
  }

  // Numeric years first (newest to oldest), then named folders like "Previous Years".
  const isYear = (key) => /^\d{4}$/.test(key)
  const shelfOrder = (a, b) => {
    if (isYear(a) && isYear(b)) return Number(b) - Number(a)
    if (isYear(a)) return -1
    if (isYear(b)) return 1
    return a.localeCompare(b)
  }

  const reading = []
  const yearShelves = Object.keys(byYear)
    .sort(shelfOrder)
    .map((year) => {
      const files = byYear[year]
      const listed = (catalog[year] || [])
        .filter((book) => files[book.file])
        .map((book) => ({ ...book, cover: files[book.file] }))
      const listedFiles = new Set(listed.map((book) => book.file))
      const extra = Object.keys(files)
        .filter((file) => !listedFiles.has(file))
        .sort()
        .map((file) => ({ file, title: titleFromFile(file), author: '', cover: files[file] }))
      const books = [...listed, ...extra]
      reading.push(...books.filter((book) => book.reading))
      return { key: year, label: year, books: books.filter((book) => !book.reading) }
    })
    .filter((shelf) => shelf.books.length > 0)

  const shelves = reading.length > 0 ? [{ key: 'reading', label: 'Currently reading', books: reading }] : []
  return [...shelves, ...yearShelves]
}
