import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ButtonAppBar from './components/layouts/ButtonAppBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ButtonAppBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
