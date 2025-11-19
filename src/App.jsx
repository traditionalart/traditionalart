import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Taichi from "./pages/taichi";
import Contact from "./pages/Contact";
import Teacher from "./pages/Teacher";
import Footer from "./components/footer";
import "./App.css";

export default function App() {
  return (
    <>
      <div id="bg-gradient" className="background"></div>
      <div id="everything">
        <div id="bg-image" className="background"></div>
        <Navbar />
        <main id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taichi" element={<Taichi />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
