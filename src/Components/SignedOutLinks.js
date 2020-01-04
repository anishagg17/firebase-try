import React from 'react'
import { NavLink } from 'react-router-dom'
class SignedOutLinks extends React.Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/signIn">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signUp">Sign UP</NavLink>
        </li>
      </ul>
    )
  }
}
export default SignedOutLinks
