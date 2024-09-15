import React from 'react';
import AddNoteForm from './AddNoteForm';
import NotesList from './NotesList';

class NotesApp extends React.Component {

 constructor(props) {
  super(props);
  this.state = { notes: [] };
 }

 componentDidMount() {
  this.refreshNotesHandler();
 }

 componentWillUnmount() {

 }

 refreshNotesHandler = () => {
  fetch(process.env.REACT_APP_NOTES_URL)
   .then(response => response.json())
   .then(notes => this.setState({ notes: notes }));
 }

 addNoteHandler = (note) => {
  fetch(process.env.REACT_APP_NOTES_URL, {
   method: 'POST',
   headers: { 'Content-Type': 'application/json;charset=utf-8' },
   body: JSON.stringify(note)
  })
   .then(() => this.refreshNotesHandler());
 };

 deleteNoteHandler = (note) => {
  fetch(process.env.REACT_APP_NOTES_URL + '/' + note.id,
   { method: 'DELETE' })
   .then(() => this.refreshNotesHandler());
 };

 render() {
  return (
   <div className="Notes">
    <div className="notes__container">
     <div className="notes_app-title">Notes
      <div className="control form__title">
       <button onClick={this.refreshNotesHandler}>Refresh</button>
      </div>
     </div>
     <NotesList notesList={this.state.notes} deleteNoteHandler={this.deleteNoteHandler} />
     <AddNoteForm addNoteHandler={this.addNoteHandler} />
    </div>
   </div>
  );
 }
}

export default NotesApp;