import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { WhyUs } from "./components/WhyUs";
import { Feedback } from "./components/Feedback";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Feedback from 'react-bootstrap/esm/Feedback';
// import { WhyUs } from './components/WhyUs';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <WhyUs/>
      <Feedback/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
