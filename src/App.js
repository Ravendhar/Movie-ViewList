import Navbar from "./components/NavBar/navbar";
import Cards from "./components/Cards/cards";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Action from "./components/Listitems/Action/action.jsx";
import Horror from "./components/Listitems/Horror/horror.js";
import Drama from "./components/Listitems/Drama/drama.js";
import Comedy from "./components/Listitems/Comedy/comedy.js";
import Scifi from "./components/Listitems/Scifi/scifi.js";
import Fantasy from "./components/Listitems/Fantasy/fantasy.js";
import Footer from "./components/Footer/footer.js";

function App() {
  console.log("rendering app");
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Cards/>} />
            <Route path="/Action"  element={<Action/>} />
            <Route path="/Horror" element={<Horror/>} />
            <Route path="/Drama" element={<Drama/>} />
            <Route path="/Comedy" element={<Comedy/>} />
            <Route path="/Scifi" element={<Scifi/>} />
            <Route path="/Fantasy" element={<Fantasy/>} />
          </Routes>
        <Footer />  
      </div>
    </BrowserRouter>    
  );
}

export default App;
