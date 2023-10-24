import logo from './logo.svg';
import './App.css';
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Projects from './pages/projects';
import Recruiters from './pages/recruiters';
import ContactMe from './pages/contactMe';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/recruiters" element={<Recruiters/>}/>
        <Route path="/ContactMe" element={<ContactMe/>}/>
      </Routes>
    </BrowserRouter>
     
      {/* <h2>Hey, Good morning</h2> */}
      
    </div>
  );
}

export default App;
