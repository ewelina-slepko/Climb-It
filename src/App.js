import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './components/layouts/AppBar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}


export default App;
