import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import Navbar1 from "./components/Navbar1";
import ProjectDetails from "./components/Projects/ProjectDetails";
import Article from "./pages/Article/Article";
import DetailArticle from "./pages/Article/DetailArticle";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import Contact from './pages/Contact/Contact';
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar1 />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ProjectDetails />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article/:id" element={<DetailArticle />} />
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>

      <div className="get-in-touch">
        <GetInTouch />
      </div>
    </Router>
  );
}

export default App;
