import React from 'react';
import './App.css';
import MainDashboard from './Components/MainDashboard';
import CustomModal from './Components/Modal';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainDashboard />
      <CustomModal />
    </div>
  );
}

export default App;
