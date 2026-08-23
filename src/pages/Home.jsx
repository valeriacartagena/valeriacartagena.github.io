const GitHubIcon = () => (
  <svg className="link-icon" viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

function Home() {
  const links = [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/valeriacartagena/' },
    { title: 'GitHub', url: 'https://github.com/valeriacartagena', icon: <GitHubIcon /> },
    { title: 'Google Scholar', url: 'https://scholar.google.com/citations?user=Ux4P00UAAAAJ&hl=en' }
  ];

  const news = [
    {
      date: '07/2026',
      text: (
        <>
          Attended Lawrence Berkeley National Laboratory&apos;s <a href="https://dl4sci-school.lbl.gov/" target="_blank" rel="noopener noreferrer">Deep Learning for Science School</a>.
        </>
      )
    },
    {
      date: '07/2026',
      text: (
        <>
          Attended <a href="https://events.ycombinator.com/startup-school-2026" target="_blank" rel="noopener noreferrer">Y Combinator Startup School</a>.
        </>
      )
    },
    {
      date: '06/2026',
      text: (
        <>
          Joined the <a href="https://batterycenter.slac.stanford.edu/" target="_blank" rel="noopener noreferrer">SLAC Battery Research Center</a>, where I will be conducting research as a <a href="https://explore-energy.stanford.edu/research/super/super-scholars" target="_blank" rel="noopener noreferrer">SUPER</a> intern for the summer!
        </>
      )
    },
    { date: '06/2026', text: 'Finished junior year at Stanford 🥳' },
    {
      date: '04/2026',
      text: (
        <>
          Co-led a <a href="https://explore-energy.stanford.edu/" target="_blank" rel="noopener noreferrer">Stanford Explore Energy</a> field trip to the <a href="https://www.tesla.com/giga-nevada" target="_blank" rel="noopener noreferrer">Tesla-Panasonic Gigafactory</a> and <a href="https://www.redwoodmaterials.com/" target="_blank" rel="noopener noreferrer">Redwood Materials</a> in Nevada, exploring the lithium-ion battery supply chain from cell production to recycling.
        </>
      )
    },
    {
      date: '03/2026',
      text: (
        <>
          Presented progress on Lens AI, CS senior capstone with <a href="https://www.nvidia.com/" target="_blank" rel="noopener noreferrer">NVIDIA</a> through the <a href="https://web.stanford.edu/class/cs210/index.html" target="_blank" rel="noopener noreferrer">Stanford Industry Innovation Lab</a>, at NVIDIA headquarters.
        </>
      )
    },
    {
      date: '01/2026',
      text: (
        <>
          Attended the <a href="https://www.liquidsunlightalliance.org/" target="_blank" rel="noopener noreferrer">Liquid Sunlight Alliance</a> all-hands meeting at Caltech and presented a poster on ICP-MS for catalyst degradation as part of SLAC&apos;s <a href="https://suncat.stanford.edu/" target="_blank" rel="noopener noreferrer">SUNCAT</a> center.
        </>
      )
    },
    {
      date: '11/2025', text: (
        <> <a href="https://devpost.com/software/terralink-h5vuel" target="_blank" rel="noopener noreferrer">TerraLink</a> won HackPrinceton! Best Sustainability Hack (1st Place) and Best Overall (3rd Place), among 600+ hackers. Prizes were sponsored by OpenAI, Anthropic, Amplitude, and EaglePlan.</>
      )
    },
    {
      date: '08/2025',
      text: (
        <>
          Completed my summer internship at <a href="https://www.twelve.co/" target="_blank" rel="noopener noreferrer">Twelve</a>, a carbon-transformation unicorn turning CO₂ into essential chemicals and sustainable aviation fuel, under the Strategy & Special Projects team.
        </>
      )
    }
  ];

  return (
    <>
      <header id="home" className="hero">
        <img src="/profile.png" alt="Valeria Cartagena" className="profile-img" />
        <div className="hero-info">
          <p className="hello">Hi, I&apos;m</p>
          <h1 className="name">Valeria Cartagena</h1>
          <p className="bio"> ChemE + CS + Energy Science & Engineering @ Stanford University</p>
          <p className="research"> I'm currently working on Agentic AI for scientific discovery and sustainability.</p>
          <p className="email">Reach out to <a href="mailto:valecv@stanford.edu">valecv@stanford.edu</a>!</p>
          <div className="links-section">
            {links.map((link) => (
              <a key={link.title} href={link.url} className="link-btn" target="_blank" rel="noopener noreferrer">
                {link.icon}
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section id="news" className="home-block">
        <h2 className="news-title">News</h2>
        <div className="news-section">
          <ul className="news-list">
            {news.map((item, i) => (
              <li key={`${item.date}-${i}`} className="news-item">
                <span className="news-date">{item.date}</span>
                <span className="news-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="research" className="home-block">
        <h2 className="news-title">Research</h2>
        <div className="news-section">
          <p className="placeholder">Coming soon.</p>
        </div>
      </section>
    </>
  )
}

export default Home
