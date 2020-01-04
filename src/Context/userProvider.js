import React, { Component, createContext } from 'react';
import { auth } from '../FireStore/fbConfig';

export const UserContext = createContext();

class UserProvider extends Component {
  state = { user: null };
  unsubscribeFromAuth = null;
  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(gotUser => {
      //   console.log(gotUser);
      let user = null;
      if (gotUser == null) this.setState({ user });
      else {
        user = {
          email: gotUser.email,
          name: gotUser.displayName,
          photo: gotUser.photoURL
        };
        this.setState({ user });
      }
    });
  };
  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }
  render() {
    const { children } = this.props;
    const { user } = this.state;

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}
export default UserProvider;
