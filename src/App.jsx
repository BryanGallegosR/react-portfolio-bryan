import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <NavMenu />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
  