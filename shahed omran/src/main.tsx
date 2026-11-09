import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import invitationPattern from './assets/o.png'
import openEnvelope from './assets/a.png'
import './index.css'
import './envelope-fix.css'
import './music'

// Start fetching the large artwork as soon as the app module loads, rather
// than waiting until React paints the page or the user opens the envelope.
for (const [src, priority] of [
  [invitationPattern, 'high'],
  [openEnvelope, 'auto'],
] as const) {
  const image = new Image()
  image.decoding = 'async'
  image.fetchPriority = priority
  image.src = src
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
