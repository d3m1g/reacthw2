import React from 'react';
import PropTypes from 'prop-types';
import Errors from './Errors';

function AddNoteForm(props) {

 const { addNoteHandler } = props;
 const emptyNote = { id: undefined, content: '' };

 const [form, setForm] = React.useState(emptyNote);
 const [errors, setErrors] = React.useState([]);

 const handleSubmit = evt => {
  evt.preventDefault();
  let errs = [];

  if (!form.content || !form.content === '') {
   errs.push('Не указан текст заметки.');
  }
  setErrors(errs);

  if (errs.length === 0) {
   const note = { id: 0, content: form.content };
   addNoteHandler(note);
   setForm(emptyNote);
  }
 };

 const handleChange = ({ target }) => {
  const name = target.name;
  const value = target.value;
  setForm(prevForm => ({ ...prevForm, [name]: value }));
 }

 return (
  <div className="AddNoteForm">
   <form className="add-note-form__form" onSubmit={handleSubmit}>
    <div className="control form__title">
     <label htmlFor="text">New Note</label>
     <button type="submit">Add</button>
    </div>
    <div className="control">
     <textarea
      rows="10" cols="45"
      type="text"
      placeholder=""
      id="text"
      name="content"
      value={form.content}
      onChange={handleChange} />
    </div>
   </form>
   <Errors errors={errors} />
  </div>
 );
}

AddNoteForm.propTypes = {
 addNoteHandler: PropTypes.func
}

export default AddNoteForm;