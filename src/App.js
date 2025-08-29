import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import "./CSS Components/DarkMode.css";

function App() {
  const [mode, setMode] = useState("Light");

  const handleButtonChange = () => {
    setMode((prevMode) => (prevMode === "Light" ? "Dark" : "Light"));
  };
  return (
    <div className={`${mode}`}>
      <Navbar text={mode} onButtonClick={handleButtonChange} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
