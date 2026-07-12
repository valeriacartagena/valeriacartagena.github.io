// Each entry's `content` stays empty for now — fill them in over time.
// An entry with a `section` is grouped under that subheading on its topic page.

export const topics = [
  {
    slug: 'Learning',
    name: 'Learning',
    title: 'Learning',
    entries: [
      { slug: 'favorite-classes-at-stanford', title: 'Favorite courses at Stanford', content: '' }
    ]
  },
  {
    slug: 'reading',
    name: 'Reading',
    title: 'Reading',
    entries: [
      { slug: 'habits-for-reading', title: 'Current books', content: '' },
      { slug: 'favorite-books', title: 'List of favorite books', content: '' },
      { slug: 'quarterly-books', title: 'All quarterly books', content: '' }
    ]
  },
  {
    slug: 'exploring',
    name: 'Exploring',
    title: 'All about energy',
    entries: [
      { slug: 'basics-of-energy', title: 'Learning about the basics of energy', content: '' },
      { slug: 'water-electrolysis', title: 'What is water electrolysis', section: "Topics I'm interested in", content: '' },
      { slug: 'co2-reduction', title: 'CO2 reduction', section: "Topics I'm interested in", content: '' },
      { slug: 'marine-carbon-capture', title: 'Marine carbon capture', section: "Topics I'm interested in", content: '' },
      { slug: 'ai-and-robotics-for-energy', title: 'AI and robotics for energy', section: "Topics I'm interested in", content: '' }
    ]
  },
  {
    slug: 'ai',
    name: 'AI',
    title: 'Getting started into AI',
    entries: [
      { slug: 'cool-tools', title: 'Cool tools', content: '' }
    ]
  }
]

export function getTopic(slug) {
  return topics.find((topic) => topic.slug === slug)
}

export function getEntry(topicSlug, entrySlug) {
  const topic = getTopic(topicSlug)
  return topic?.entries.find((entry) => entry.slug === entrySlug)
}
