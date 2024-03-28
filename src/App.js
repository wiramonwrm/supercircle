import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Project1 from "./components/pages/Project1";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/supercircle" exact element={<Home />} />

          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Project1 />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
