import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recipes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
