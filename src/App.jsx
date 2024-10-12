import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Navbar1 from './components/Navbar1'
import ProjectDetails from "./components/Projects/ProjectDetails";
import Article from "./pages/Article/Article";
import DetailArticle from "./pages/Article/DetailArticle";



function App() {
  return (
    <Router>
      <Navbar1 />
      <main className='main-content'>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/details/:id" element={<ProjectDetails />} />
          <Route path='/article' element={<Article/>}/>
          <Route path='/article/:id' element={<DetailArticle/>}/>
         </Routes>
      </main>
    </Router>
  )
}

export default App
