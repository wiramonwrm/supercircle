import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Project1 from "./components/pages/Project1";
import Project2 from "./components/pages/Project2";
import Projects from "./components/pages/Projects";
import UnProject from "./components/pages/UnProject";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/supercircle" exact element={<Projects />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/project1" exact element={<Project1 />} />
          <Route path="/project2" exact element={<Project2 />} />
          <Route path="/no-project" exact element={<UnProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
