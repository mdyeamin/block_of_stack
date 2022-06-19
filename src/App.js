// import logo from "./logo.svg";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./components/pages/Cources/Courses";
import Resources from "./components/pages/Resources/Resources";
import Navigation from "./components/pages/Navigation/Navigation";
import Classes from "./components/pages/Classes/Classes";
import EnrollNow from "./components/pages/EnrollNow/EnrollNow";
import Footer from "./components/pages/Footer/Footer";
import "./styles/App.scss";
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/courses' element={<Courses />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/dashboard' element={<Classes />} />
        <Route path='/checkout' element={<EnrollNow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
