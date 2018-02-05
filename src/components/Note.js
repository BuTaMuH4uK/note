import React from 'react'
import './css/Note.css'

function Note() {
  return (
    <div className="note">
      <input type="text" className="label-field" placeholder="Label" maxLength="50"/>
      <div className="hr" />
      <textarea className="note-field" autoFocus="true" placeholder="Text..."/>
    </div>
  );
}

export default Note
