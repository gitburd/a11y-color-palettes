import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from "../store/actions/authActions"
import { Link } from 'react-router-dom'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    passwordVarification: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  emailIsVerified = () => {
    return (this.state.password === this.state.passwordVarification &&
      this.state.password.length >= 6)
  }

  render() {
    const { auth, signupError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} required pattern="\S{6,}" />
          </div>
          <div>
            <label htmlFor="passwordVarification">Confirm Password</label>
            <input type="password" id='passwordVarification' onChange={this.handleChange} required pattern="\S{6,}" />
          </div>
          <div>
            {this.state.password.length < 6 && <p className="red-text">Password must be at least 6 characters.</p>}
            {this.state.password !== this.state.passwordVarification && <p className="red-text">Passwords must match.</p>}
            <button disabled={!this.emailIsVerified()} className={this.emailIsVerified() ? "" : "disabled"}>Sign Up</button>
            <div>{signupError ? <p className="red-text">{signupError.message}</p> : null}</div>
          </div>
        </form>
        <p style={{ textAlign: "center", margin: "30px", color: "#3A0D34" }}>Have an account? <Link to='/login'>Login</Link></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    signupError: state.auth.signupError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
