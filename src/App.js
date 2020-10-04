import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import Dashboard from './component/dashboard/Dashboard';
import NavBar from './component/layout/NavBar';
import CreateProject from './component/projects/CreateProject';
import ProjectDetails from './component/projects/ProjectDetails';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/project/:id" component={ProjectDetails} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/create" component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
