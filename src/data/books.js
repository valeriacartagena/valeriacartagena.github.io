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
    { file: 'shoe-dog', title: 'Shoe Dog', author: 'Phil Knight', goodreads: 'https://www.goodreads.com/book/show/27220736-shoe-dog' },
    { file: 'zero-to-one', title: 'Zero to One', author: 'Peter Thiel', goodreads: 'https://www.goodreads.com/book/show/18050143-zero-to-one' },
    { file: 'grit-9781501111129_hr', title: 'Grit', author: 'Angela Duckworth', goodreads: 'https://www.goodreads.com/book/show/27213329-grit' },
    { file: 'deep-work', title: 'Deep Work', author: 'Cal Newport', goodreads: 'https://www.goodreads.com/book/show/25744928-deep-work' },
    { file: 'the-worlds-i-see', title: 'The Worlds I See', author: 'Fei-Fei Li', goodreads: 'https://www.goodreads.com/book/show/144405196-the-worlds-i-see' },
    { file: 'designing-your-life', title: 'Designing Your Life', author: 'Bill Burnett & Dave Evans', goodreads: 'https://www.goodreads.com/book/show/61130244-designing-your-life' },
    { file: 'unreasonable-hospitality', title: 'Unreasonable Hospitality', author: 'Will Guidara', goodreads: 'https://www.goodreads.com/book/show/60018618-unreasonable-hospitality' },
    { file: 'inner-excellence', title: 'Inner Excellence', author: 'Jim Murphy', goodreads: 'https://www.goodreads.com/book/show/53588649-inner-excellence' },
    { file: 'inside-the-box', title: 'Inside the Box', author: 'David Epstein', goodreads: 'https://www.goodreads.com/book/show/240336791-inside-the-box' },
    { file: 'when-heavens-went-on-sale', title: 'When the Heavens Went on Sale', author: 'Ashlee Vance', goodreads: 'https://www.goodreads.com/book/show/62050244-when-the-heavens-went-on-sale' },
    { file: 'thinking-machine', title: 'The Thinking Machine', author: 'Stephen Witt', reading: true, goodreads: 'https://www.goodreads.com/book/show/211399783-the-thinking-machine' },
    { file: 'infinity-machine', title: 'The Infinity Machine', author: 'Sebastian Mallaby', reading: true, goodreads: 'https://www.goodreads.com/book/show/241434373-the-infinity-machine' },
    { file: 'brief-history-of-intelligence', title: 'A Brief History of Intelligence', author: 'Max Bennett', reading: true, goodreads: 'https://www.goodreads.com/book/show/62050269-a-brief-history-of-intelligence' },
  ],
  'Previous Years': [
    { file: 'quantum-supremacy', title: 'Quantum Supremacy', author: 'Michio Kaku', reading: true, goodreads: 'https://www.goodreads.com/book/show/61965263-quantum-supremacy' },
    // listed books come first, in this order; the rest follow alphabetically
    { file: 'bible', title: 'Holy Bible', author: '', goodreads: 'https://www.goodreads.com/book/show/280111.Holy_Bible' },
    { file: 'atomic-habits', title: 'Atomic Habits', author: 'James Clear', goodreads: 'https://www.goodreads.com/book/show/40121378-atomic-habits' },
    { file: 'astrophysics-for-people-in-a-hurry', title: 'Astrophysics for People in a Hurry', author: 'Neil deGrasse Tyson', goodreads: 'https://www.goodreads.com/book/show/32191710-astrophysics-for-people-in-a-hurry' },
    { file: 'code', title: 'Code: The Hidden Language of Computer Hardware and Software', author: 'Charles Petzold', goodreads: 'https://www.goodreads.com/book/show/44882.Code' },
    { file: 'compound-effect', title: 'The Compound Effect', author: 'Darren Hardy', goodreads: 'https://www.goodreads.com/book/show/9420697-the-compound-effect' },
    { file: 'david-and-goliath', title: 'David and Goliath', author: 'Malcolm Gladwell', goodreads: 'https://www.goodreads.com/book/show/15751404-david-and-goliath' },
    { file: 'ego-is-the-enemy', title: 'Ego Is the Enemy', author: 'Ryan Holiday', goodreads: 'https://www.goodreads.com/book/show/27036528-ego-is-the-enemy' },
    { file: 'einstein', title: 'Einstein: His Life and Universe', author: 'Walter Isaacson', goodreads: 'https://www.goodreads.com/book/show/10884.Einstein' },
    { file: 'essentialism', title: 'Essentialism', author: 'Greg McKeown', goodreads: 'https://www.goodreads.com/book/show/19776547-essentialism' },
    { file: 'fermat-s-last-theorem', title: "Fermat's Last Theorem", author: 'Simon Singh', goodreads: 'https://www.goodreads.com/book/show/131305.Fermat_s_Last_Theorem' },
    { file: 'hidden-potential', title: 'Hidden Potential', author: 'Adam Grant', goodreads: 'https://www.goodreads.com/book/show/157095669-hidden-potential' },
    { file: 'hyperspace', title: 'Hyperspace', author: 'Michio Kaku', goodreads: 'https://www.goodreads.com/book/show/33426.Hyperspace' },
    { file: 'infinite-game', title: 'The Infinite Game', author: 'Simon Sinek', goodreads: 'https://www.goodreads.com/book/show/38390751-the-infinite-game' },
    { file: 'invent-and-wonder', title: 'Invent and Wander', author: 'Jeff Bezos', goodreads: 'https://www.goodreads.com/book/show/54505323-invent-and-wander' },
    { file: 'leonardo-da-vinci', title: 'Leonardo da Vinci', author: 'Walter Isaacson', goodreads: 'https://www.goodreads.com/book/show/34684622-leonardo-da-vinci' },
    { file: 'man-s-search-for-meaning', title: "Man's Search for Meaning", author: 'Viktor E. Frankl', goodreads: 'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning' },
    { file: 'outliers', title: 'Outliers', author: 'Malcolm Gladwell', goodreads: 'https://www.goodreads.com/book/show/3228917-outliers' },
    { file: 'physics-of-impossible', title: 'Physics of the Impossible', author: 'Michio Kaku', goodreads: 'https://www.goodreads.com/book/show/1168341.Physics_of_the_Impossible' },
    { file: 'power-of-habit', title: 'The Power of Habit', author: 'Charles Duhigg', goodreads: 'https://www.goodreads.com/book/show/12609433-the-power-of-habit' },
    { file: 'reaching-for-the-stars', title: 'Reaching for the Stars', author: 'José M. Hernández', goodreads: 'https://www.goodreads.com/book/show/14583510-reaching-for-the-stars' },
    { file: 'richest-man-in-babilon', title: 'The Richest Man in Babylon', author: 'George S. Clason', goodreads: 'https://www.goodreads.com/book/show/43097201-the-richest-man-in-babylon' },
    { file: 'slight-edge', title: 'The Slight Edge', author: 'Jeff Olson', goodreads: 'https://www.goodreads.com/book/show/590652.The_Slight_Edge' },
    { file: 'subtle-art', title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', goodreads: 'https://www.goodreads.com/book/show/28257707-the-subtle-art-of-not-giving-a-f-ck' },
    { file: 'the-code-breaker', title: 'The Code Breaker', author: 'Walter Isaacson', goodreads: 'https://www.goodreads.com/book/show/54968118-the-code-breaker' },
    { file: 'the-courage-to-be-disliked', title: 'The Courage to Be Disliked', author: 'Ichiro Kishimi & Fumitake Koga', goodreads: 'https://www.goodreads.com/book/show/43306206-the-courage-to-be-disliked' },
    { file: 'the-next-millionaire-next-door', title: 'The Next Millionaire Next Door', author: 'Thomas J. Stanley & Sarah Stanley Fallaw', goodreads: 'https://www.goodreads.com/book/show/40831515-the-next-millionaire-next-door' },
    { file: 'the-tipping-point', title: 'The Tipping Point', author: 'Malcolm Gladwell', goodreads: 'https://www.goodreads.com/book/show/2612.The_Tipping_Point' },
    { file: 'think-and-grow-rich', title: 'Think and Grow Rich', author: 'Napoleon Hill', goodreads: 'https://www.goodreads.com/book/show/30186948-think-and-grow-rich' },
    { file: 'third-door', title: 'The Third Door', author: 'Alex Banayan', goodreads: 'https://www.goodreads.com/book/show/36739769-the-third-door' },
    { file: 'ultralearning', title: 'Ultralearning', author: 'Scott H. Young', goodreads: 'https://www.goodreads.com/book/show/44770129-ultralearning' },
    { file: 'universe-speaks-in-numbers', title: 'The Universe Speaks in Numbers', author: 'Graham Farmelo', goodreads: 'https://www.goodreads.com/book/show/45362835-the-universe-speaks-in-numbers' },
  ],
}

// Where a book links to: an exact `goodreads` URL from the catalog if given,
// otherwise a Goodreads search for the title (and author), which lands on
// the book as the first result.
function goodreadsUrl(book) {
  if (book.goodreads) return book.goodreads
  const query = [book.title, book.author].filter(Boolean).join(' ')
  return `https://www.goodreads.com/search?q=${encodeURIComponent(query)}`
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
        .map((book) => ({ ...book, cover: files[book.file], url: goodreadsUrl(book) }))
      const listedFiles = new Set(listed.map((book) => book.file))
      const extra = Object.keys(files)
        .filter((file) => !listedFiles.has(file))
        .sort()
        .map((file) => {
          const book = { file, title: titleFromFile(file), author: '', cover: files[file] }
          return { ...book, url: goodreadsUrl(book) }
        })
      const books = [...listed, ...extra]
      reading.push(...books.filter((book) => book.reading))
      return { key: year, label: year, books: books.filter((book) => !book.reading) }
    })
    .filter((shelf) => shelf.books.length > 0)

  const shelves = reading.length > 0 ? [{ key: 'reading', label: 'Currently reading', books: reading }] : []
  return [...shelves, ...yearShelves]
}
