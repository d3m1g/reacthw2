import React from 'react';
import PropTypes from 'prop-types';
import NoteModel from '../models/NoteModel';

function Note(props) {

 const { note, deleteNoteHandler } = props;

 const handleDelete = evt => {
  evt.preventDefault();
  deleteNoteHandler(note);
 }

 return (
  <div className="Note">
   <div className="note__title">
    <div className="note__delete-button">
     <a href="/" onClick={handleDelete}>✘</a>
    </div>
   </div>
   <div className="note__text">
    {note.content}
   </div>
  </div>
 );
}

Note.propTypes = {
 note: NoteModel().isRequired,
 deleteNoteHandler: PropTypes.func.isRequired
};

export default Note;