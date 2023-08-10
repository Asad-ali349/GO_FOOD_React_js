import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="/Faq" element={<Faq/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
