import React from 'react'
import LogIn from './LogIn'
import './css/Auth.css'

function Auth() {
  return (
    <div className="auth">
      <LogIn />
      <div className="auth-footer">
        <button onClick={handleClick}>Check In</button>
      </div>
    </div>
  );
}

function handleClick(props) {
  props.context.work = !props.context.work;
  console.log(props.context.work);
}

export default Auth
