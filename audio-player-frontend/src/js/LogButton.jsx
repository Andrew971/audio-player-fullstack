import React from 'react';
import { Link, Redirect } from 'react-router-dom'

import Auth from './Authentication.js'
import {
  withRouter
} from 'react-router-dom'

const LogButton = withRouter(({ history }) => (
  //If authenticated, show a sign out button
  Auth.isAuthenticated() ? (

      <a href="/" onClick={() => {
        Auth.signout(Auth.token, (signedout)=>{
          return <Redirect to='/'/>
        })
      }}>Sign out</a> 

) : (
  //If not authenticated, show a login button

  <Link to="/login">Login</Link>

)
))


export default LogButton;