import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Stack from "./pages/Stack/Stack";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
