import Navbar from './components/nav';
import { Home } from './pages/home';
import GradientCirclesright from './components/GradientCirclesright';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Adjust the path if needed

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home/>} path='/'/>
        </Routes>
        <GradientCirclesright />
      </BrowserRouter>
    </div>
  );
}

export default App;
