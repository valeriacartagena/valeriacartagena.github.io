import deloreanCover from '../tutorials-covers/delorean.jpg'

// Each tutorial shows as a card on the home page and has its own page at
// /tutorials/<slug>. `content` is the body of that page (JSX).
export const tutorials = [
  {
    slug: 'tutorial-1',
    title: 'Tutorial #1',
    description: 'Coming in the future...',
    cover: deloreanCover,
    content: (
      <>
        <blockquote>
          <p>&ldquo;Roads? Where we&rsquo;re going, we don&rsquo;t need roads.&rdquo;</p>
          <footer>Dr. Emmett Brown</footer>
        </blockquote>
      </>
    ),
  },
  {
    slug: 'tutorial-2',
    title: 'Tutorial #2',
    description: 'Coming in the future...',
    cover: deloreanCover,
    content: (
      <>
        <blockquote>
          <p>&ldquo;Whoa. Wait a minute, Doc. Are you telling me that you built a time machine... out of a DeLorean?!&rdquo;</p>
          <footer>Marty McFly</footer>
        </blockquote>
      </>
    ),
  },
  {
    slug: 'tutorial-3',
    title: 'Tutorial #3',
    description: 'Coming in the future...',
    cover: deloreanCover,
    content: (
      <>
        <blockquote>
          <p>&ldquo;Remember, Marty, you&rsquo;re just not thinking fourth-dimensionally.&rdquo;</p>
          <footer>Dr. Emmett Brown</footer>
        </blockquote>
      </>
    ),
  },
  {
    slug: 'tutorial-4',
    title: 'Tutorial #4',
    description: 'Coming in the future...',
    cover: deloreanCover,
    content: (
      <>
        <blockquote>
          <p>&ldquo;All right. This is an oldie, but, uh... well, it&rsquo;s an oldie where I come from.&rdquo;</p>
          <footer>Marty McFly</footer>
        </blockquote>
      </>
    ),
  },
  {
    slug: 'tutorial-5',
    title: 'Tutorial #5',
    description: 'Coming in the future...',
    cover: deloreanCover,
    content: (
      <>
        <blockquote>
          <p>&ldquo;I&rsquo;m your density. I mean...your destiny.&rdquo;</p>
          <footer>George McFly</footer>
        </blockquote>
      </>
    ),
  },
]

export function getTutorial(slug) {
  return tutorials.find((tutorial) => tutorial.slug === slug)
}
