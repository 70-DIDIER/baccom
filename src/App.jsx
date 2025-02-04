import { Navbar } from "./components/Navbar";
/* IMPORT DES STYLES */
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS core
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS avec composants interactifs
import './custom-bootstrap.scss'; // Personnalisations Bootstrap en SCSS
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App(){
  return(
   <>
       <Navbar />
       <Home />
       <Service/>
       <About />
       <Contact />
       <Footer />
  </>
  )
}

export default App;