import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import Auth from '../../../js/Authentication.js'

export default class Signup extends Component {
constructor(){
  super()
  this.state={
    redirectToReferrer: false
  }
}
  Signup=()=>{
   const {username, password} = this.signupForm

  Auth.signup(username.value,password.value,(succes)=>{
    this.setState({

      redirectToReferrer: true,  

    })
  })
  }

  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to='/login'/>
    }
    return (
      <main className="container-fluid content">
        <form ref={self => this.signupForm = self}>
          <div className="form-group">
            <label htmlFor="email">username:</label>
            <input type="email" className="form-control" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="checkbox">
            <label><input type="checkbox" /> Remember me</label>
          </div>
          <button type="button" className="btn btn-default" onClick={this.Signup}>Submit</button>
        </form>
        <div><Link to="/login">log in here</Link></div>

      </main>
    );
  }
}