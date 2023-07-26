import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Homes from './components/Homes';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
