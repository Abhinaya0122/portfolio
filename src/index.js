import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education.js'
// import Projects from './Components/Projects.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navbar />
   <Home />
   <About />
   <Education />
   {/* <Projects /> */}
  </React.StrictMode>
);

