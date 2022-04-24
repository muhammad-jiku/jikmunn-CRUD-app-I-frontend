import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddChampion from './components/AddChampion/AddChampion';
import Home from './components/Home/Home';
import UpdateChampion from './components/UpdateChampion/UpdateChampion';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/champion/add" element={<AddChampion />} />
          <Route path="/updatechamp/:id" element={<UpdateChampion />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
