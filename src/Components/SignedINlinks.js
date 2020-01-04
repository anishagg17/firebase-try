import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../FireStore/fbConfig';
import { UserContext } from '../Context/userProvider';

class SignedINlinks extends React.Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/create">New project</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={signOut}>
            Logout
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            <UserContext.Consumer>
              {user => {
                const name = user.name.split(' ');
                let notation = '';
                notation += name[0].charAt(0);
                if (name[1]) notation += name[1].charAt(0);
                return notation;
              }}
            </UserContext.Consumer>
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default SignedINlinks;
