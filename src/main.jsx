import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Header.jsx'
import Home from './Homepage.jsx'
import ShanmugamBackground from './about.jsx'
import Project from './project.jsx'
import Contact from './contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <ShanmugamBackground />

    <Project />
    <Contact />

  </StrictMode>,
)
