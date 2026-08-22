import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-blobs" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <div className="container">
        <Home />

        <footer className="footer">
          <p>Copyright © 2026 Valeria Cartagena. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
