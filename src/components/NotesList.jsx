import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import NoteModel from '../models/NoteModel';

function NotesList(props) {

 const { notesList, deleteNoteHandler } = props;

 return (
  <div className="NotesList">
   {notesList.map((note) => <Note key={note.id}
    note={note}
    deleteNoteHandler={deleteNoteHandler} />)}
  </div>
 );
}

NotesList.propTypes = {
 notesList: PropTypes.arrayOf(NoteModel()).isRequired,
 deleteNoteHandler: PropTypes.func.isRequired
}

export default NotesList;