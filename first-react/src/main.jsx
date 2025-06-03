import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
// import MyAwesomNavbar from './Components/App.jsx'
// import StaticPage from './Components/index.jsx'
// import PageContent from './Components-Static-Page/page.jsx'
// import ReactFact from './ReactFactComponent/ReactFacts'
// import App from './Components/DataDrivenComponent/App'
// import App from './Components/PropsComponent/App'
// import Contact from './Components/PropsComponent/Contact'
import Main from './Components/PropsComponent/main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyAwesomNavbar /> */}
    {/* <StaticPage /> */}
    {/* <PageContent /> */}
    {/* <ReactFact /> */}
    {/* <App /> */}
    {/* <App /> */}
    {/* <Contact /> */}
    <Main />
  </StrictMode>
)
