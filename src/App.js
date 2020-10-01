import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './component/layout/NavBar';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
    </div>
    </BrowserRouter>
  );
}

export default App;
