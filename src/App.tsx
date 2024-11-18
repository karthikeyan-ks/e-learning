import Navbar from './components/nav';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Contact from './pages/Contact';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Adjust the path if needed

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<About/>} path='/about'/>
          <Route element={<Program />} path='/program'/>
          <Route element={<Contact/>} path='/contact'/>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
