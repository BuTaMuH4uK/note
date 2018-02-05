import React from 'react'
import './css/LogIn.css'

function LogIn() {
  return (
    <div className="login">
      <input type="text" className="user-field" placeholder="Username" />
      <input type="password" className="passw-field" placeholder="Password" />
      <input type="submit" className="submit-field" value="Log In" />
    </div>
  );
}

export default LogIn
