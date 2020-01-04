import React, { Component } from 'react';
import { signInWtihGoogle } from '../FireStore/fbConfig';
import styled from 'styled-components';

const GoogleButton = styled.button`
  border: 3px solid #4285f4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  * {
    margin-right: 1rem;
  }
  img {
    height: 100%;
  }
`;
const Buttons = styled.div`
  display: flex;
  * {
    margin-right: 1rem;
  }
`;

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
          <Buttons>
            <button className="btn pink lighten-1 section">Submit</button>
            <GoogleButton onClick={signInWtihGoogle}>
              <img
                width="20px"
                alt="Google sign-in"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              <div> Login with Google</div>
            </GoogleButton>
          </Buttons>
        </form>
      </div>
    );
  }
}
export default SignIN;
