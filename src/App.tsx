import React from 'react';
import Navbar from './compunents/nav'; 
import GradientCircles from './compunents/BlueGradientBackground';
// Ensure this matches the correct path and the default export
import GradientCirclesright from './compunents/GradientCirclesright';

// Adjust the path if needed

function App() {
  return (
    <div className="App">
      <Navbar />
      <GradientCircles />
      <GradientCirclesright />
    </div>
  );
}

export default App;
