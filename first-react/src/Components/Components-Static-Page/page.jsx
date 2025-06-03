
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";


function PageContent() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
    
  )
}

export default PageContent;


// function PageContent(){
//   return (
//     <>
//       <header>
//         <img src="./src/assets/React-Logo.png" alt="React logo" />
//       </header>
//       <h1>One of most famous front-end Javascript library</h1>
//         <ol>
//           <li>can write our code to simply describe what should show up on the page and allow the (React, e.g.) to handle the details on *how* to put those things on the page</li>
//           <li>Custom Component</li>
//         </ol>
//       <footer>
//         &copy; 2025 sodha development. All rights reserved.
//       </footer>
//     </>
//   )
// }