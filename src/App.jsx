import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Projects from "./pages/Projects";
import Cursor from "./components/Cursor";
function App() {
  return (
    <div>
      <Cursor />
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// a portfolio that looks like a code ide
