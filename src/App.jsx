import "./App.css";
import Nav from "./pages/components/nav/Nav";
import Projects from "./pages/Projects";
import About from "./pages/AboutMe";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import { viewMode } from "./hooks/viewMode";

function App() {
  const [darkMode, setDarkMode] = viewMode();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="pages">
        <Home theme={darkMode} />
        <Projects theme={darkMode} />
        <About theme={darkMode} />
        <Curriculum theme={darkMode} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
