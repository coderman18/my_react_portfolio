import "./styles/main.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
// import Projects from "./pages/Projects/Projects";
// import Contacts from "./pages/Contacts/Contacts";
import Project from "./pages/Projects/Project/Project";


function App() {
  return (
    <div className="App">
        <Nav />
        <Home />
        <Project />
        {/* <Projects /> */}
        {/* <Contacts /> */}
        <Footer />
    </div>
  );
}

export default App;
