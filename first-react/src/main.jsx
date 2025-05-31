import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import MyAwesomNavbar from './Components/App.jsx'
import StaticPage from './Components/index.jsx'
import PageContent from './Components/page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyAwesomNavbar /> */}
    {/* <StaticPage /> */}
    <PageContent />
  </StrictMode>
)
