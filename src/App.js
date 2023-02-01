import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import NavBar from './components/nav/Navbar';
import Dropdown from './components/nav/Dropdown';
import Page from './components/Page';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Page />
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
