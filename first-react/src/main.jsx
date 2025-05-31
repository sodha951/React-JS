import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
// import MyAwesomNavbar from './Components/App.jsx'
// import StaticPage from './Components/index.jsx'
// import PageContent from './Components-Static-Page/page.jsx'
import ReactFact from './ReactFactComponent/ReactFacts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyAwesomNavbar /> */}
    {/* <StaticPage /> */}
    {/* <PageContent /> */}
    <ReactFact />
  </StrictMode>
)
