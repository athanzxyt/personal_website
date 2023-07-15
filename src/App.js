import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Playground from "./components/Playground";
import Contact from "./components/Contact";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
