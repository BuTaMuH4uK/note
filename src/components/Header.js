import React from 'react'
import Auth from './Auth'
import './css/Header.css'

function Header(props) {
  return (
    <div className="header">
      <div className="logo">Notes</div>
      <Auth context={props.context} />
    </div>
  );
}

export default Header
