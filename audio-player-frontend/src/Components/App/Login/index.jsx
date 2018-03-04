import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import Auth from '../../../js/Authentication.js'


export default class Signup extends Component {
  constructor(){
    super()
    this.state={
      redirectToReferrer: false,  
      errorMessage: ''
    }
  }
    login=()=>{
     const {username, password} = this.loginForm
    Auth.authenticate(username.value,password.value,(success)=>{
      if(success) {
        //If user successfully authenticates, redirect to the 
        //page that sent them to the login page
        this.setState({
          redirectToReferrer: true
        })
      } else {
        //Set the state to have an error message
        this.setState({
          errorMessage: 'Invalid Login Credentials'
        })
      }
    })
    }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    //If the user successfully logged in, we will redirect them
    //to wear they came from
    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    return (
      <main className="container-fluid content">
        login
        {
          (this.state.errorMessage)
          ? <p style={{color: 'red', fontWeight: 'bold'}}>failed to log in</p> 
          : ''
        }
        <form ref={self => this.loginForm = self}>
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
          <button type="button" className="btn btn-default" onClick={this.login}>Submit</button>
        </form>
        <div><Link to="/signup">Sign up in here</Link></div>

      </main>
    );
  }
}