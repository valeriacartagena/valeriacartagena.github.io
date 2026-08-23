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
        <p><em>&ldquo;Roads? Where we&rsquo;re going, we don&rsquo;t need roads.&rdquo;</em></p>
        <p> - Dr. Emmett Brown</p>
      </>
    ),
  },
]

export function getTutorial(slug) {
  return tutorials.find((tutorial) => tutorial.slug === slug)
}
