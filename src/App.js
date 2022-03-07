import "normalize.css";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionHome from "./components/section-home";
import Footer from "./components/footer";
import ContactMe from "./components/contact-me";
import About from "./components/about";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SectionHome />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route
          path="/about"
          element={
            <>
              <About />
              <ContactMe></ContactMe>
            </>
          }
        ></Route>
        <Route path="*" element={<SectionHome />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
