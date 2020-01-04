import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';
import Summary from './Components/Summary';
import SignIN from './Components/SignIn';
import SignUp from './Components/SignUp';
import CreateProject from './Components/CreateProject';
import { UserContext } from './Context/userProvider';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <UserContext.Consumer>
          {user =>
            user ? (
              <Switch>
                <Route path="/create" component={CreateProject} />
                <Route path="/project/:id" component={Summary} />
                <Route path="/" component={Dashboard} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/signIn" component={SignIN} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/project/:id" component={Summary} />
                <Route path="/" component={Dashboard} />
              </Switch>
            )
          }
        </UserContext.Consumer>
      </BrowserRouter>
    );
  }
}

export default App;
