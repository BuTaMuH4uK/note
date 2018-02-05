import React from 'react'
import './css/Menu.css'

function Menu() {
  return (
    <div className="menu">
      <input type="text" className="add-note" placeholder="New note"/>
      <input type="text" className="add-label" placeholder="New label"/>
      <input type="text" className="send-email" placeholder="Send via email"/>
      <input type="text" className="share" placeholder="share"/>
    </div>
  );
}

export default Menu
