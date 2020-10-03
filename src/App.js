import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
import NavBar from './component/layout/NavBar';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
