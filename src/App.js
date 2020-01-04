import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';
import Summary from './Components/Summary';
import SignIN from './Components/SignIn';
import SignUp from './Components/SignUp';
import CreateProject from './Components/CreateProject';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/project/:id" component={Summary} />
          <Route path="/signIn" component={SignIN} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
