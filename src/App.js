import "./styles/main.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";


function App() {
  return (
    <div className="App">
        <Nav />
        <Home />
        <Projects />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
