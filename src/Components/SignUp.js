import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    pass: '',
    fname: '',
    lname: ''
  }
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handelSubmit = e => {
    e.preventDefault()
    console.log(e)
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={e => this.handelSubmit(e)}>
          <h5 className="grey-text text-darken-3">Sign up</h5>{' '}
          <div className="inpt-field">
            <label htmlFor="pass">First Name</label>
            <input
              type="text"
              value={this.state.fname}
              onChange={e => this.handelChange(e)}
              id="fname"
            />
          </div>{' '}
          <div className="inpt-field">
            <label htmlFor="pass">Last Name</label>
            <input
              type="text"
              value={this.state.lname}
              onChange={e => this.handelChange(e)}
              id="lname"
            />
          </div>
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
              value={this.state.name}
              onChange={e => this.handelChange(e)}
              id="pass"
            />
          </div>
          <button className="btn pink lighten-1 section">Submit</button>
        </form>
      </div>
    )
  }
}
export default SignUp
