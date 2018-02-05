import React from 'react'
import Menu from './Menu'
import MainFrame from './MainFrame'
import './css/WorkSpace.css'

function WorkSpace() {
  return (
    <div className="workspace">
      <Menu />
      <MainFrame />
    </div>
  );
}

export default WorkSpace
