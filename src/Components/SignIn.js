import React, { Component } from 'react';
import { signInWtihGoogle } from '../FireStore/fbConfig';

class SignIN extends Component {
  state = {
    email: '',
    pass: ''
  };
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={e => this.handelSubmit(e)}>
          <h5 className="grey-text text-darken-3">Sign in</h5>
          <div className="inpt-field">
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={e => this.handelChange(e)}
              id="email"
            />
          </div>
          <div className="inpt-field">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              value={this.state.pass}
              onChange={e => this.handelChange(e)}
              id="pass"
            />
          </div>
          <button className="btn pink lighten-1 section">Submit</button>
          <button onClick={signInWtihGoogle}>Google</button>
        </form>
      </div>
    );
  }
}
export default SignIN;
