import React from 'react'
import './css/CheckIn.css'

function CheckIn() {
  return (
    <div className="checkin">
      <input type="text" className="email-field" placeholder="Email" />
      <input type="text" className="user-field" placeholder="Username" />
      <input type="password" className="passw-field" placeholder="Password" />
    </div>
  );
}

export default CheckIn
