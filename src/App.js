import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Website from "./components/Website";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Website />
      <Experience />
      {/* <Contact /> */}

      <SocialLinks />
    </div>
  );
}

export default App;
