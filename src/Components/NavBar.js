import React from 'react';
import { Link } from 'react-router-dom';
import SignedINlinks from './SignedINlinks';
import SignedOutLinks from './SignedOutLinks';
import { UserContext } from '../Context/userProvider';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo left">
            HOZE
          </Link>
          <UserContext.Consumer>
            {user => (user ? <SignedINlinks /> : <SignedOutLinks />)}
          </UserContext.Consumer>
        </div>
      </nav>
    );
  }
}

export default NavBar;
