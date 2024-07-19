import React from 'react';
import LandingPage from './pages/landingpage';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <>
      <div className='w-full h-full'>
        <div className='absolute w-full'>
        <Navbar />
        </div>
        <div>
          <LandingPage />
        </div>
      </div>
    </>
  );
}

export default App;
