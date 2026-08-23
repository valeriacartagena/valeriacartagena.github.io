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
  {
    slug: 'tutorial-2',
    title: 'Tutorial #2',
    description: 'Coming in the future...',
    cover: deloreanCover,
    content: (
      <>
        <p><em>&ldquo;Whoa. Wait a minute, Doc. Are you telling me that you built a time machine... out of a DeLorean?!&rdquo;</em></p>
        <p> - Marty McFly</p>
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
        <p><em>&ldquo;Remember, Marty, you're just not thinking fourth-dimensionally.&rdquo;</em></p>
        <p> - Dr. Emmett Brown</p>
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
        <p><em>&ldquo;All right. This is an oldie, but, uh... well, it's an oldie where I come from.&rdquo;</em></p>
        <p> - Marty McFly</p>
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
        <p><em>&ldquo;I'm your density. I mean...your destiny.&rdquo;</em></p>
        <p> - George McFly</p>
      </>
    ),
  },
]

export function getTutorial(slug) {
  return tutorials.find((tutorial) => tutorial.slug === slug)
}
