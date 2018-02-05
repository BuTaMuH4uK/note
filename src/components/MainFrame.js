import React from 'react'
import SideBar from './SideBar'
import Note from './Note'
import './css/MainFrame.css'

function MainFrame() {
  return (
    <div className="mainframe">
      <SideBar />
      <Note />
    </div>
  );
}

export default MainFrame
