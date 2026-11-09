import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import invitationPattern from './assets/o.png'
import openEnvelope from './assets/ab.png'
import laceCard from './assets/lace-card-transparent.png'
import couplePhoto from './assets/por.png'
import plaque from './assets/plaque.png'
import './index.css'
import './envelope-fix.css'
import './fast-images.css'
import './music'

// Preload artwork that appears as soon as the envelope opens so the browser
// can fetch and decode it before the invitation is revealed.
for (const [src, priority] of [
  [invitationPattern, 'high'],
  [openEnvelope, 'high'],
  [laceCard, 'high'],
  [couplePhoto, 'auto'],
  [plaque, 'auto'],
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
